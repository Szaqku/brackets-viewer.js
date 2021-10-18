import { Match } from 'brackets-model';
import { RankingHeader, Ranking, RankingFormula, RankingItem, BracketType, Side } from './types';
/**
 * Splits an array based on values of a given key of the objects of the array.
 *
 * @param array The array to split.
 * @param key The key of T.
 */
export declare function splitBy<T>(array: T[], key: keyof T): T[][];
/**
 * Finds the root element
 *
 * @param selector An optional selector to select the root element.
 */
export declare function findRoot(selector?: string): HTMLElement;
/**
 * Completes a list of matches with blank matches based on the next matches.
 *
 * Toornament can generate first rounds with an odd number of matches and the seeding is partially distributed in the second round.
 * This function adds a blank match in the first round as if it was the source match of a seeded match of the second round.
 *
 * @param matches The list of first round matches.
 * @param nextMatches The list of second round matches.
 * @param bracketType Type of the bracket.
 */
export declare function completeWithBlankMatches(matches: Match[], nextMatches: Match[], bracketType: BracketType): {
    matches: (Match | null)[];
    fromToornament: boolean;
};
/**
 * Returns the abbreviation for a participant origin.
 *
 * @param matchLocation Location of the match.
 * @param skipFirstRound Whether to skip the first round.
 * @param roundNumber Number of the round.
 * @param side Side of the participant.
 */
export declare function getOriginAbbreviation(matchLocation: BracketType, skipFirstRound: boolean, roundNumber?: number, side?: Side): string | null;
/**
 * Indicates whether a round is major.
 *
 * @param roundNumber Number of the round.
 */
export declare function isMajorRound(roundNumber: number): boolean;
/**
 * Returns the header for a ranking property.
 *
 * @param itemName Name of the ranking property.
 */
export declare function rankingHeader(itemName: keyof RankingItem): RankingHeader;
/**
 * Calculates the ranking based on a list of matches and a formula.
 *
 * @param matches The list of matches.
 * @param formula The points formula to apply.
 */
export declare function getRanking(matches: Match[], formula?: RankingFormula): Ranking;
