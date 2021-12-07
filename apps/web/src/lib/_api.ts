
import { PrismaClient, Prisma } from "@stockmeup/db";

const _store = Prisma.validator<Prisma.StoreArgs>()({});
type Store = Prisma.StoreGetPayload<typeof _store>

const _storeWithLinks = Prisma.validator<Prisma.StoreArgs>()({ include: { links: true } });
type StoreWithLinks = Prisma.StoreGetPayload<typeof _store>

class api {
    db = new PrismaClient();

    getStore(storeId?: number,): Promise<StoreWithLinks | StoreWithLinks[]> {
        if (storeId) {
            return this.db.store.findFirst({
                where: {
                    id: storeId,
                },
                include: {
                    links: true,
                }
            });
        }
        return this.db.store.findMany({ include: { links: true } });
    }
    createStore(store: Store): Promise<Store> {
        return this.db.store.create({ data: store });
    }

    deleteStore(storeId: number): Promise<Store> {
        return this.db.store.delete({
            where: {
                id: storeId,
            }
        });
    }



}




export default new api();
