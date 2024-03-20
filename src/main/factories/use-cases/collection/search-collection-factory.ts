import { CollectionSearch } from "@application/use-cases/collection/CollectionSearch";
import { CollectionRepository } from "@infrastructure/db/mongodb/repositories/CollectionRepository";

export const makeSearchCollection = (): CollectionSearch => {
    const collectionRepository = new CollectionRepository();

    return new CollectionSearch(collectionRepository);
}