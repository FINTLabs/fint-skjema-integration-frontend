export function addId(id: number, field: string) {
    return function iter(obj: any) {
        if (field in obj) {
            obj.id = id++;
        }
        Object.keys(obj).forEach(function (k) {
            Array.isArray(obj[k]) && obj[k].forEach(iter);
        });
    };
}

export function toTagValue(input: string): string {
    let value = input.toLowerCase()
        .replace('ø', 'o')
        .replace('æ', 'a')
        .replace('å', 'aa');
    return '{' + value + '}';
}
