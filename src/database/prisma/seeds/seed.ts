import { createAdminUser } from './createAdminUser';
import db from "../../helpers/connection";
import { createPlan } from './createPlan';

async function seedAll() {
    await createAdminUser(db);
    await createPlan(db);
}

seedAll()
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        db.$disconnect();
    });