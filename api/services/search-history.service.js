import SearchHistory from '../models/SearchHistory.js';

export async function saveSearch(data) {
  const entry = new SearchHistory(data);
  return entry.save();
}

export async function getRecentSearches(limit = 10) {
  console.log("Buscando históricos de busca...");
  return SearchHistory.find().sort({ searchedAt: -1 }).limit(limit);
}
