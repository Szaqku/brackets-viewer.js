import { CrudInterface, OmitId, Table } from 'brackets-manager';
import { Database } from 'brackets-manager/dist/types';
export declare class InMemoryDatabase implements CrudInterface {
    protected data: Database;
    /**
     * @param data "import" data from external
     */
    setData(data: Database): void;
    makeFilter(partial: any): (entry: any) => boolean;
    /**
     * Clearing all of the data
     */
    reset(): void;
    insert<T>(table: Table, value: OmitId<T>): Promise<number>;
    /**
     * Inserts multiple values in the database.
     *
     * @param table Where to insert.
     * @param values What to insert.
     */
    insert<T>(table: Table, values: OmitId<T>[]): Promise<boolean>;
    /**
     * Gets all data from a table in the database.
     *
     * @param table Where to get from.
     */
    select<T>(table: Table): Promise<T[] | null>;
    /**
     * Gets specific data from a table in the database.
     *
     * @param table Where to get from.
     * @param id What to get.
     */
    select<T>(table: Table, id: number): Promise<T | null>;
    /**
     * Gets data from a table in the database with a filter.
     *
     * @param table Where to get from.
     * @param filter An object to filter data.
     */
    select<T>(table: Table, filter: Partial<T>): Promise<T[] | null>;
    /**
     * Updates data in a table.
     *
     * @param table Where to update.
     * @param id What to update.
     * @param value How to update.
     */
    update<T>(table: Table, id: number, value: T): Promise<boolean>;
    /**
     * Updates data in a table.
     *
     * @param table Where to update.
     * @param filter An object to filter data.
     * @param value How to update.
     */
    update<T>(table: Table, filter: Partial<T>, value: Partial<T>): Promise<boolean>;
    /**
     * Empties a table completely.
     *
     * @param table Where to delete everything.
     */
    delete(table: Table): Promise<boolean>;
    /**
     * Delete data in a table, based on a filter.
     *
     * @param table Where to delete in.
     * @param filter An object to filter data.
     */
    delete<T>(table: Table, filter: Partial<T>): Promise<boolean>;
}
