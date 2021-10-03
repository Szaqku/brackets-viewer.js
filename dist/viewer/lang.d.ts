import { StringMap, TOptions } from 'i18next';
import { Status } from 'brackets-model';
import { FinalType, BracketType, OriginHint, RankingHeaders } from '../types';
export declare const locales: {
    en: {
        "origin-hint": {
            seed: string;
            "winner-bracket": string;
            "winner-bracket-semi-final": string;
            "winner-bracket-final": string;
            "consolation-final": string;
            "grand-final": string;
        };
        "match-label": {
            "winner-bracket": string;
            "loser-bracket": string;
            "standard-bracket": string;
            "standard-bracket-semi-final": string;
            "standard-bracket-final": string;
            "double-elimination": string;
            "double-elimination-semi-final": string;
            "double-elimination-final": string;
            "consolation-final": string;
            "grand-final-single": string;
            "grand-final": string;
        };
        "match-status": {
            locked: string;
            waiting: string;
            ready: string;
            running: string;
            completed: string;
            archived: string;
        };
        abbreviations: {
            win: string;
            loss: string;
            forfeit: string;
            position: string;
            seed: string;
        };
        ranking: {
            rank: {
                text: string;
                tooltip: string;
            };
            id: {
                text: string;
                tooltip: string;
            };
            played: {
                text: string;
                tooltip: string;
            };
            wins: {
                text: string;
                tooltip: string;
            };
            draws: {
                text: string;
                tooltip: string;
            };
            losses: {
                text: string;
                tooltip: string;
            };
            forfeits: {
                text: string;
                tooltip: string;
            };
            "score-for": {
                text: string;
                tooltip: string;
            };
            "score-against": {
                text: string;
                tooltip: string;
            };
            "score-difference": {
                text: string;
                tooltip: string;
            };
            points: {
                text: string;
                tooltip: string;
            };
        };
        common: {
            bye: string;
            "best-of-x": string;
            "group-name": string;
            "round-name": string;
            "round-name-final": string;
            "round-name-winner-bracket": string;
            "round-name-winner-bracket-final": string;
            "round-name-loser-bracket": string;
            "round-name-loser-bracket-final": string;
        };
        "form-creator": {
            "stage-name-label": string;
            "stage-name-placeholder": string;
            "stage-selector-label": string;
            "team-label": string;
            "team-placeholder": string;
            "group-label": string;
            "group-placeholder": string;
            "seed-order-label": string;
            "double-elimination-seed-order-placeholder": string;
            "round-robin-mode-label": string;
            "consolation-final-label": string;
            "skip-first-round-label": string;
            "grand-final-type-label": string;
            submit: string;
        };
    };
    fr: {
        "origin-hint": {
            seed: string;
            "winner-bracket": string;
            "winner-bracket-semi-final": string;
            "winner-bracket-final": string;
            "consolation-final": string;
            "grand-final": string;
        };
        "match-label": {
            "winner-bracket": string;
            "loser-bracket": string;
            "standard-bracket": string;
            "standard-bracket-semi-final": string;
            "standard-bracket-final": string;
            "double-elimination": string;
            "double-elimination-semi-final": string;
            "double-elimination-final": string;
            "consolation-final": string;
            "grand-final-single": string;
            "grand-final": string;
        };
        "match-status": {
            locked: string;
            waiting: string;
            ready: string;
            running: string;
            completed: string;
            /**
             * Returns an origin hint function based on rounds information.
             *
             * @param roundNumber Number of the round.
             * @param roundCount Count of rounds.
             * @param skipFirstRound Whether to skip the first round.
             * @param matchLocation Location of the match.
             */
            archived: string;
        };
        abbreviations: {
            win: string;
            loss: string;
            forfeit: string;
            position: string;
            seed: string;
        };
        ranking: {
            rank: {
                text: string;
                tooltip: string;
            };
            id: {
                text: string;
                tooltip: string;
            };
            played: {
                text: string;
                tooltip: string;
            };
            wins: {
                text: string;
                tooltip: string;
            };
            draws: {
                text: string;
                tooltip: string;
            };
            losses: {
                text: string;
                tooltip: string;
            };
            forfeits: {
                text: string;
                tooltip: string;
            };
            "score-for": {
                text: string;
                tooltip: string;
            };
            "score-against": {
                text: string;
                tooltip: string;
            };
            "score-difference": {
                text: string;
                tooltip: string;
            };
            points: {
                text: string;
                tooltip: string;
            };
        };
        common: {
            bye: string;
            "best-of-x": string;
            "group-name": string;
            "round-name": string;
            "round-name-final": string;
            "round-name-winner-bracket": string;
            "round-name-winner-bracket-final": string;
            "round-name-loser-bracket": string;
            "round-name-loser-bracket-final": string;
        };
        "form-creator": {
            "stage-name-label": string;
            "stage-name-placeholder": string;
            "stage-selector-label": string;
            "team-label": string;
            "team-placeholder": string;
            "group-label": string;
            "group-placeholder": string;
            "seed-order-label": string;
            "double-elimination-seed-order-placeholder": string;
            "round-robin-mode-label": string;
            "consolation-final-label": string;
            "skip-first-round-label": string;
            "grand-final-type-label": string;
            submit: string;
        };
    };
};
export declare type Locale = typeof locales['en'];
/**
 * Returns an internationalized version of a locale key.
 *
 * @param key A locale key.
 * @param options Data to pass to the i18n process.
 */
export declare function t<Scope extends keyof Locale, SubKey extends string & keyof Locale[Scope], T extends TOptions>(key: `${Scope}.${SubKey}`, options?: T): T['returnObjects'] extends true ? StringMap : string;
/**
 * Returns an origin hint function based on rounds information.
 *
 * @param roundNumber Number of the round.
 * @param roundCount Count of rounds.
 * @param skipFirstRound Whether to skip the first round.
 * @param matchLocation Location of the match.
 */
export declare function getOriginHint(roundNumber: number, roundCount: number, skipFirstRound: boolean, matchLocation: BracketType): OriginHint | undefined;
/**
 * Returns an origin hint function for a match in final.
 *
 * @param finalType Type of the final.
 * @param roundNumber Number of the round.
 */
export declare function getFinalOriginHint(finalType: FinalType, roundNumber: number): OriginHint | undefined;
/**
 * Returns the label of a match.
 *
 * @param matchNumber Number of the match.
 * @param roundNumber Number of the round.
 * @param roundCount Count of rounds.
 * @param matchLocation Location of the match.
 */
export declare function getMatchLabel(matchNumber: number, roundNumber: number, roundCount: number, matchLocation: BracketType): string;
/**
 * Returns the label of a match in final.
 *
 * @param finalType Type of the final.
 * @param roundNumber Number of the round.
 * @param roundCount Count of rounds.
 */
export declare function getFinalMatchLabel(finalType: FinalType, roundNumber: number, roundCount: number): string;
/**
 * Returns the status of a match.
 *
 * @param status The match status.
 */
export declare function getMatchStatus(status: Status): string;
/**
 * Returns the name of a group.
 *
 * @param groupNumber Number of the group.
 */
export declare function getGroupName(groupNumber: number): string;
/**
 * Returns the name of a round.
 *
 * @param roundNumber Number of the round.
 * @param roundCount Count of rounds.
 */
export declare function getRoundName(roundNumber: number, roundCount: number): string;
/**
 * Returns the name of a round in the winner bracket of a double elimination stage.
 *
 * @param roundNumber Number of the round.
 * @param roundCount Count of rounds.
 */
export declare function getWinnerBracketRoundName(roundNumber: number, roundCount: number): string;
/**
 * Returns the name of a round in the loser bracket of a double elimination stage.
 *
 * @param roundNumber Number of the round.
 * @param roundCount Count of rounds.
 */
export declare function getLoserBracketRoundName(roundNumber: number, roundCount: number): string;
/**
 * Abbreviations used in the viewer.
 */
export declare const abbreviations: {
    win: string;
    loss: string;
    forfeit: string;
    position: string;
    seed: string;
};
/**
 * The Best of X literal.
 *
 * @param x Child count.
 */
export declare const bestOfX: (x: number) => string;
/**
 * The BYE literal.
 */
export declare const BYE: string;
/**
 * Headers of the ranking.
 */
export declare const headers: RankingHeaders;
