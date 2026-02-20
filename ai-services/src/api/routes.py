"""
API Routes - Define API endpoints
"""
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional

from ..signals.signal_generator import SignalGenerator
from ..sentiment.sentiment_analyzer import SentimentAnalyzer
from ..analytics.market_analyzer import MarketAnalyzer

router = APIRouter()

signal_generator = SignalGenerator()
sentiment_analyzer = SentimentAnalyzer()
market_analyzer = MarketAnalyzer()


class SignalRequest(BaseModel):
    symbol: str
    market_data: Optional[List[dict]] = None


class SentimentRequest(BaseModel):
    text: str


@router.get("/signals/{symbol}")
async def get_signals(symbol: str):
    """Get AI-generated trading signals for a symbol"""
    try:
        signals = signal_generator.generate_signals(symbol, {})
        return {"symbol": symbol, "signals": signals}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/sentiment/analyze")
async def analyze_sentiment(request: SentimentRequest):
    """Analyze sentiment of news/text"""
    try:
        result = sentiment_analyzer.analyze(request.text)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/analytics/trend/{symbol}")
async def get_trend_analysis(symbol: str):
    """Get trend analysis for a symbol"""
    try:
        # Mock price data
        price_data = [
            {"price": 175.0 + i * 0.5, "timestamp": f"2024-01-{19+i}T00:00:00"}
            for i in range(50)
        ]
        
        trend = market_analyzer.analyze_trend(symbol, price_data)
        return {"symbol": symbol, "trend": trend}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "ok", "service": "ai-services"}
