const { orderService } = require('../services/order.service');
const { matchingEngineService } = require('../services/matchingEngine.service');
const { validationService } = require('../services/validation.service');

const createOrder = async (req, res, next) => {
  try {
    const orderData = req.body;
    const userId = req.user?.id || req.body.userId;

    // Validate order
    const validation = await validationService.validateOrder(orderData);
    if (!validation.valid) {
      return res.status(400).json({ error: 'Validation failed', details: validation.errors });
    }

    // Create order
    const order = await orderService.createOrder({
      ...orderData,
      userId,
      status: 'pending',
      createdAt: new Date(),
    });

    // Submit to matching engine
    await matchingEngineService.submitOrder(order);

    res.status(201).json({ 
      message: 'Order created successfully', 
      order: orderService.formatOrder(order)
    });
  } catch (error) {
    next(error);
  }
};

const getOrders = async (req, res, next) => {
  try {
    const userId = req.user?.id || req.query.userId;
    const filters = {
      userId,
      status: req.query.status,
      symbol: req.query.symbol,
      limit: parseInt(req.query.limit) || 50,
      offset: parseInt(req.query.offset) || 0,
    };

    const orders = await orderService.getOrders(filters);
    const total = await orderService.countOrders(filters);

    res.json({ 
      orders: orders.map(order => orderService.formatOrder(order)),
      total,
      limit: filters.limit,
      offset: filters.offset
    });
  } catch (error) {
    next(error);
  }
};

const getOrderById = async (req, res, next) => {
  try {
    const order = await orderService.getOrderById(req.params.id);
    
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json({ order: orderService.formatOrder(order) });
  } catch (error) {
    next(error);
  }
};

const cancelOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const userId = req.user?.id;

    const order = await orderService.getOrderById(orderId);
    
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // Check authorization
    if (userId && order.userId !== userId) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    // Cancel order
    const cancelledOrder = await orderService.cancelOrder(orderId);

    res.json({ 
      message: 'Order cancelled successfully',
      order: orderService.formatOrder(cancelledOrder)
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOrder,
  getOrders,
  getOrderById,
  cancelOrder,
};
