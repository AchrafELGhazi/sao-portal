import { useState, useEffect, useMemo } from 'react';
import { events } from '@/data/events';
import { Stats,Event } from '@/types/Events';

const years: string[] = ['2025', '2024', '2023', '2022', '2021'];
const categories: string[] = [
  'All',
  'Musical Night',
  'National Trip',
  'International Trip',
  'Games',
  'Cultural Event',
  'Workshop',
];

export default function useEventsFilter() {
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Filter events based on current filter settings
  const filteredEvents = useMemo(() => {
    return events.filter((event: Event) => {
      // Filter by category
      if (selectedCategory !== 'All' && event.category !== selectedCategory) {
        return false;
      }
      
      // Filter by year
      if (selectedYear !== 'All' && event.year !== selectedYear) {
        return false;
      }
      
      // Filter by search query
      if (
        searchQuery && 
        !event.title.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      
      return true;
    });
  }, [selectedYear, selectedCategory, searchQuery]);

  // Calculate statistics from filtered events
  const stats: Stats = useMemo(() => {
    const categoryStats = categories.reduce<{ [key: string]: number }>(
      (acc, category) => {
        acc[category] = filteredEvents.filter(e =>
          category === 'All' ? true : e.category === category
        ).length;
        return acc;
      },
      {}
    );

    // Find the category with the most events (excluding "All")
    const mostCommonCategory = Object.entries(categoryStats)
      .filter(([cat]) => cat !== 'All')
      .sort(([, a], [, b]) => b - a)[0]?.[0] || 'N/A';

    return {
      total: filteredEvents.length,
      byCategory: categoryStats,
      mostCommonCategory
    };
  }, [filteredEvents]);

  // Update active filters whenever filters change
  useEffect(() => {
    const filters: string[] = [];
    if (selectedYear !== 'All') filters.push(`Year: ${selectedYear}`);
    if (selectedCategory !== 'All') filters.push(`Category: ${selectedCategory}`);
    if (searchQuery) filters.push(`Search: "${searchQuery}"`);
    setActiveFilters(filters);
  }, [selectedYear, selectedCategory, searchQuery]);

  // Function to clear all filters
  const clearFilters = (): void => {
    setSelectedYear('All');
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return {
    // Filter state
    selectedYear,
    setSelectedYear,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    activeFilters,
    
    // Results
    filteredEvents,
    stats,
    
    // Available options
    years,
    categories,
    
    // Actions
    clearFilters
  };
}