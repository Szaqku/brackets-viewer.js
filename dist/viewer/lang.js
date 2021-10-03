"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.headers = exports.BYE = exports.bestOfX = exports.abbreviations = exports.getLoserBracketRoundName = exports.getWinnerBracketRoundName = exports.getRoundName = exports.getGroupName = exports.getMatchStatus = exports.getFinalMatchLabel = exports.getMatchLabel = exports.getFinalOriginHint = exports.getOriginHint = exports.t = exports.locales = void 0;
const i18next_1 = __importDefault(require("i18next"));
const i18next_browser_languagedetector_1 = __importDefault(require("i18next-browser-languagedetector"));
const brackets_model_1 = require("brackets-model");
const helpers_1 = require("./helpers");
const translation_json_1 = __importDefault(require("../i18n/en/translation.json"));
const translation_json_2 = __importDefault(require("../i18n/fr/translation.json"));
exports.locales = {
    en: translation_json_1.default,
    fr: translation_json_2.default,
};
i18next_1.default.use(i18next_browser_languagedetector_1.default).init({
    fallbackLng: 'en',
    debug: false,
    resources: {
        en: {
            translation: exports.locales.en,
        },
        fr: {
            translation: exports.locales.fr,
        },
    },
});
/**
 * Returns an internationalized version of a locale key.
 *
 * @param key A locale key.
 * @param options Data to pass to the i18n process.
 */
function t(key, options) {
    return i18next_1.default.t(key, options);
}
exports.t = t;
/**
 * Returns an origin hint function based on rounds information.
 *
 * @param roundNumber Number of the round.
 * @param roundCount Count of rounds.
 * @param skipFirstRound Whether to skip the first round.
 * @param matchLocation Location of the match.
 */
function getOriginHint(roundNumber, roundCount, skipFirstRound, matchLocation) {
    if (roundNumber === 1) {
        if (matchLocation === 'single-bracket')
            return (position) => t('origin-hint.seed', { position });
        if (matchLocation === 'winner-bracket')
            return (position) => t('origin-hint.seed', { position });
        if (matchLocation === 'loser-bracket' && skipFirstRound)
            return (position) => t('origin-hint.seed', { position });
    }
    if (helpers_1.isMajorRound(roundNumber) && matchLocation === 'loser-bracket') {
        if (roundNumber === roundCount - 2)
            return (position) => t('origin-hint.winner-bracket-semi-final', { position });
        if (roundNumber === roundCount)
            return () => t('origin-hint.winner-bracket-final');
        const roundNumberWB = Math.ceil((roundNumber + 1) / 2);
        if (skipFirstRound)
            return (position) => t('origin-hint.winner-bracket', { round: roundNumberWB - 1, position });
        return (position) => t('origin-hint.winner-bracket', { round: roundNumberWB, position });
    }
    return undefined;
}
exports.getOriginHint = getOriginHint;
/**
 * Returns an origin hint function for a match in final.
 *
 * @param finalType Type of the final.
 * @param roundNumber Number of the round.
 */
function getFinalOriginHint(finalType, roundNumber) {
    // Single elimination.
    if (finalType === 'consolation_final')
        return (position) => t('origin-hint.consolation-final', { position });
    // Double elimination.
    if (roundNumber === 1) // Grand Final round 1
        return () => t('origin-hint.grand-final');
    // Grand Final round 2 (no hint because it's obvious both participants come from the previous round)
    return undefined;
}
exports.getFinalOriginHint = getFinalOriginHint;
/**
 * Returns the label of a match.
 *
 * @param matchNumber Number of the match.
 * @param roundNumber Number of the round.
 * @param roundCount Count of rounds.
 * @param matchLocation Location of the match.
 */
function getMatchLabel(matchNumber, roundNumber, roundCount, matchLocation) {
    const matchPrefix = matchLocation === 'winner-bracket' ? t('match-label.winner-bracket') :
        matchLocation === 'loser-bracket' ? t('match-label.loser-bracket') : t('match-label.standard-bracket');
    const inSemiFinalRound = roundNumber === roundCount - 1;
    const inFinalRound = roundNumber === roundCount;
    if (matchLocation === 'single-bracket') {
        if (inSemiFinalRound)
            return t('match-label.standard-bracket-semi-final', { matchNumber });
        if (inFinalRound)
            return t('match-label.standard-bracket-final');
    }
    if (inSemiFinalRound)
        return t('match-label.double-elimination-semi-final', { matchPrefix, matchNumber });
    if (inFinalRound)
        return t('match-label.double-elimination-final', { matchPrefix });
    return t('match-label.double-elimination', { matchPrefix, roundNumber, matchNumber });
}
exports.getMatchLabel = getMatchLabel;
/**
 * Returns the label of a match in final.
 *
 * @param finalType Type of the final.
 * @param roundNumber Number of the round.
 * @param roundCount Count of rounds.
 */
function getFinalMatchLabel(finalType, roundNumber, roundCount) {
    // Single elimination.
    if (finalType === 'consolation_final')
        return t('match-label.consolation-final');
    // Double elimination.
    if (roundCount === 1)
        return t('match-label.grand-final-single');
    return t('match-label.grand-final', { roundNumber });
}
exports.getFinalMatchLabel = getFinalMatchLabel;
/**
 * Returns the status of a match.
 *
 * @param status The match status.
 */
function getMatchStatus(status) {
    switch (status) {
        case brackets_model_1.Status.Locked:
            return t('match-status.locked');
        case brackets_model_1.Status.Waiting:
            return t('match-status.waiting');
        case brackets_model_1.Status.Ready:
            return t('match-status.ready');
        case brackets_model_1.Status.Running:
            return t('match-status.running');
        case brackets_model_1.Status.Completed:
            return t('match-status.completed');
        case brackets_model_1.Status.Archived:
            return t('match-status.archived');
        default:
            return 'Unknown status';
    }
}
exports.getMatchStatus = getMatchStatus;
/**
 * Returns the name of a group.
 *
 * @param groupNumber Number of the group.
 */
function getGroupName(groupNumber) {
    return t('common.group-name', { groupNumber });
}
exports.getGroupName = getGroupName;
/**
 * Returns the name of a round.
 *
 * @param roundNumber Number of the round.
 * @param roundCount Count of rounds.
 */
function getRoundName(roundNumber, roundCount) {
    return roundNumber === roundCount ? t('common.round-name-final') : t('common.round-name', { roundNumber });
}
exports.getRoundName = getRoundName;
/**
 * Returns the name of a round in the winner bracket of a double elimination stage.
 *
 * @param roundNumber Number of the round.
 * @param roundCount Count of rounds.
 */
function getWinnerBracketRoundName(roundNumber, roundCount) {
    return roundNumber === roundCount ? t('common.round-name-winner-bracket-final') : t('common.round-name-winner-bracket', { roundNumber });
}
exports.getWinnerBracketRoundName = getWinnerBracketRoundName;
/**
 * Returns the name of a round in the loser bracket of a double elimination stage.
 *
 * @param roundNumber Number of the round.
 * @param roundCount Count of rounds.
 */
function getLoserBracketRoundName(roundNumber, roundCount) {
    return roundNumber === roundCount ? t('common.round-name-loser-bracket-final') : t('common.round-name-loser-bracket', { roundNumber });
}
exports.getLoserBracketRoundName = getLoserBracketRoundName;
/**
 * Abbreviations used in the viewer.
 */
exports.abbreviations = {
    win: t('abbreviations.win'),
    loss: t('abbreviations.loss'),
    forfeit: t('abbreviations.forfeit'),
    position: t('abbreviations.position'),
    seed: t('abbreviations.seed'),
};
/**
 * The Best of X literal.
 *
 * @param x Child count.
 */
const bestOfX = (x) => t('common.best-of-x', { x });
exports.bestOfX = bestOfX;
/**
 * The BYE literal.
 */
exports.BYE = t('common.bye');
/**
 * Headers of the ranking.
 */
exports.headers = {
    rank: t('ranking.rank', { returnObjects: true }),
    id: t('ranking.id', { returnObjects: true }),
    played: t('ranking.played', { returnObjects: true }),
    wins: t('ranking.wins', { returnObjects: true }),
    draws: t('ranking.draws', { returnObjects: true }),
    losses: t('ranking.losses', { returnObjects: true }),
    forfeits: t('ranking.forfeits', { returnObjects: true }),
    scoreFor: t('ranking.score-for', { returnObjects: true }),
    scoreAgainst: t('ranking.score-against', { returnObjects: true }),
    scoreDifference: t('ranking.score-difference', { returnObjects: true }),
    points: t('ranking.points', { returnObjects: true }),
};
//# sourceMappingURL=lang.js.map