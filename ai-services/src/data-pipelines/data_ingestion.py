"""
Data Ingestion - Ingest data from various sources
"""
import requests
import pandas as pd
from typing import List, Dict, Optional
from datetime import datetime, timedelta


class DataIngestion:
    """Ingest data from external sources"""
    
    def __init__(self):
        self.api_endpoints = {
            'market_data': 'https://api.example.com/market',
            'news': 'https://api.example.com/news',
            'social': 'https://api.example.com/social',
        }
    
    def fetch_market_data(self, symbol: str, period: str = '24h') -> List[Dict]:
        """Fetch market data for a symbol"""
        # Mock implementation - in production, would call real API
        hours = 24 if period == '24h' else 168 if period == '7d' else 720
        
        data = []
        base_price = 175.50
        
        for i in range(hours):
            timestamp = datetime.now() - timedelta(hours=hours - i)
            variance = (hash(f"{symbol}{i}") % 200 - 100) / 10000
            price = base_price * (1 + variance)
            
            data.append({
                'symbol': symbol,
                'timestamp': timestamp.isoformat(),
                'price': round(price, 2),
                'volume': hash(f"{symbol}{i}") % 1000000,
            })
        
        return data
    
    def fetch_news(self, symbol: str, limit: int = 10) -> List[Dict]:
        """Fetch news articles for a symbol"""
        # Mock news data
        return [
            {
                'symbol': symbol,
                'title': f'News about {symbol}',
                'content': f'This is news content about {symbol}...',
                'source': 'Example News',
                'published_at': datetime.now().isoformat(),
                'url': f'https://example.com/news/{symbol}',
            }
        ]
    
    def fetch_social_sentiment(self, symbol: str) -> Dict:
        """Fetch social media sentiment"""
        return {
            'symbol': symbol,
            'sentiment_score': 0.65,
            'positive_count': 1250,
            'negative_count': 350,
            'neutral_count': 400,
            'timestamp': datetime.now().isoformat(),
        }
