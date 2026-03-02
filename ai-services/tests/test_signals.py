"""
Tests for signal generation
"""
import pytest
from src.signals.signal_generator import SignalGenerator


def test_signal_generator():
    """Test signal generator"""
    generator = SignalGenerator()
    
    # Test signal generation
    market_data = {
        "symbol": "AAPL",
        "price": 175.50,
        "volume": 1000000,
    }
    
    signals = generator.generate_signals("AAPL", market_data)
    assert isinstance(signals, list)


def test_trend_prediction():
    """Test trend prediction"""
    generator = SignalGenerator()
    
    historical_data = [
        {"price": 170, "volume": 1000000},
        {"price": 175, "volume": 1100000},
        {"price": 180, "volume": 1200000},
    ]
    
    result = generator.predict_trend("AAPL", historical_data)
    assert "direction" in result
    assert "confidence" in result
