import './style.scss';
import { Match } from 'brackets-model';
import { Config, ViewerData, ParticipantImage } from '../types';
export declare class BracketsViewer {
    readonly participantRefs: {
        [participantId: number]: HTMLElement[];
    };
    private participants;
    private participantImages;
    private config;
    private skipFirstRound;
    private alwaysConnectFirstRound;
    onMatchClicked: (_: Match) => void;
    /**
     * Renders data generated with `brackets-manager.js`. If multiple stages are given, they will all be displayed.
     *
     * Stages won't be discriminated visually based on the tournament they belong to.
     *
     * @param data The data to display.
     * @param config An optional configuration for the viewer.
     */
    render(data: ViewerData, config?: Partial<Config>): void;
    /**
     * Sets the images which will be rendered for every participant.
     *
     * @param images The participant images.
     */
    setParticipantImages(images: ParticipantImage[]): void;
    /**
     * Renders a stage (round-robin, single or double elimination).
     *
     * @param root The root element.
     * @param data The data to display.
     */
    private renderStage;
    /**
     * Renders a round-robin stage.
     *
     * @param root The root element.
     * @param stage The stage to render.
     * @param matchesByGroup A list of matches for each group.
     */
    private renderRoundRobin;
    /**
     * Renders an elimination stage (single or double).
     *
     * @param root The root element.
     * @param stage The stage to render.
     * @param matchesByGroup A list of matches for each group.
     */
    private renderElimination;
    /**
     * Renders a single elimination stage.
     *
     * @param container The container to render into.
     * @param matchesByGroup A list of matches for each group.
     */
    private renderSingleElimination;
    /**
     * Renders a double elimination stage.
     *
     * @param container The container to render into.
     * @param matchesByGroup A list of matches for each group.
     */
    private renderDoubleElimination;
    /**
     * Renders a bracket.
     *
     * @param container The container to render into.
     * @param matchesByRound A list of matches for each round.
     * @param roundName A function giving a round's name based on its number.
     * @param bracketType Type of the bracket.
     * @param connectFinal Whether to connect the last match of the bracket to the final.
     */
    private renderBracket;
    /**
     * Renders a final group.
     *
     * @param container The container to render into.
     * @param finalType Type of the final.
     * @param matches Matches of the final.
     */
    private renderFinal;
    /**
     * Creates a ranking table based on matches of a round-robin stage.
     *
     * @param matches The list of matches.
     */
    private createRanking;
    /**
     * Creates a row of the ranking table.
     *
     * @param item Item of the ranking.
     */
    private createRankingRow;
    /**
     * Creates a match in a bracket.
     *
     * @param roundNumber Number of the round.
     * @param roundCount Count of rounds.
     * @param match Information about the match.
     * @param matchLocation Location of the match.
     * @param connectFinal Whether to connect this match to the final if it happens to be the last one of the bracket.
     */
    private createBracketMatch;
    /**
     * Creates a match in a final.
     *
     * @param type Type of the final.
     * @param matches Matches of the final.
     * @param roundNumber Number of the round.
     * @param roundCount Count of rounds.
     */
    private createFinalMatch;
    /**
     * Creates a hidden empty match to act as a placeholder.
     */
    private skipBracketMatch;
    /**
     * Creates a match based on its results.
     *
     * @param match Results of the match.
     * @param matchLocation Location of the match.
     * @param connection Connection of this match with the others.
     * @param label Label of the match.
     * @param originHint Origin hint for the match.
     * @param roundNumber Number of the round.
     */
    private createMatch;
    /**
     * Creates a participant for a match.
     *
     * @param participant Information about the participant.
     * @param side Side of the participant.
     * @param originHint Origin hint for the match.
     * @param matchLocation Location of the match.
     * @param roundNumber Number of the round.
     */
    private createParticipant;
    /**
     * Renders a participant.
     *
     * @param containers Containers for the participant.
     * @param participant The participant result.
     * @param side Side of the participant.
     * @param originHint Origin hint for the match.
     * @param matchLocation Location of the match.
     * @param roundNumber Number of the round.
     */
    private renderParticipant;
    /**
     * Renders a participant image.
     *
     * @param nameContainer The name container.
     * @param participantId ID of the participant.
     */
    private renderParticipantImage;
    /**
     * Renders an origin hint for a participant.
     *
     * @param nameContainer The name container.
     * @param participant The participant result.
     * @param originHint Origin hint for the participant.
     * @param matchLocation Location of the match.
     */
    private renderHint;
    /**
     * Renders a participant's origin.
     *
     * @param nameContainer The name container.
     * @param participant The participant result.
     * @param side Side of the participant.Side of the participant.
     * @param matchLocation Location of the match.
     * @param roundNumber Number of the round.
     */
    private renderParticipantOrigin;
    /**
     * Sets mouse hover events for a participant.
     *
     * @param participantId ID of the participant.
     * @param element The dom element to add events to.
     */
    private setupMouseHover;
}
