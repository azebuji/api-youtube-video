export class ValidatorFilter {

    public filterValidator<T extends Record<string, any>>(filter?: T) {
        delete filter?.pagination;
        for (let key in filter) {

            if (filter[key] === null || filter[key] === undefined || (typeof filter[key] === 'string' && filter[key].length === 0)) {
                delete filter[key];
            }
        }
        return filter;
    }
}