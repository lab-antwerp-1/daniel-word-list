// eslint-disable-next-line folders/match-regex
import { sortWords } from '../handlers/sort-words.js';

document.getElementById('sort-type').addEventListener('change', sortWords);
