"""
Data Processor - Process and clean data
"""
import pandas as pd
from typing import List, Dict, Optional


class DataProcessor:
    """Process and clean raw data"""
    
    def clean_price_data(self, data: List[Dict]) -> pd.DataFrame:
        """Clean price data"""
        df = pd.DataFrame(data)
        
        # Remove duplicates
        df = df.drop_duplicates(subset=['timestamp'], keep='last')
        
        # Sort by timestamp
        df['timestamp'] = pd.to_datetime(df['timestamp'])
        df = df.sort_values('timestamp')
        
        # Fill missing values
        df['price'] = df['price'].fillna(method='ffill')
        df['volume'] = df['volume'].fillna(0)
        
        return df
    
    def normalize_data(self, data: List[float]) -> List[float]:
        """Normalize data to [0, 1] range"""
        if not data:
            return []
        
        min_val = min(data)
        max_val = max(data)
        
        if max_val == min_val:
            return [0.5] * len(data)
        
        return [(x - min_val) / (max_val - min_val) for x in data]
    
    def resample_data(self, df: pd.DataFrame, interval: str = '1H') -> pd.DataFrame:
        """Resample data to specified interval"""
        df = df.set_index('timestamp')
        resampled = df.resample(interval).agg({
            'price': 'last',
            'volume': 'sum',
        }).dropna()
        
        return resampled.reset_index()
