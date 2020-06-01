import namor from 'namor';

const range = (len) => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const newPerson = () => {
    const statusChance = Math.random();
    // const eventDay = new Date();
    return {
        // date: eventDay,
        date: namor.generate({ words: 1, numbers: 0 }),
        counter: Math.floor(Math.random() * 30),
        facebook: Math.floor(Math.random() * 30),
        twitter: Math.floor(Math.random() * 100),
        kakao: Math.floor(Math.random() * 100),
        name: namor.generate({ words: 1, numbers: 0 }),
        phone1: Math.floor(Math.random() * 30),
        code: Math.floor(Math.random() * 30),
        getEmoticon: Math.floor(Math.random() * 100),

        status:
            statusChance > 0.66 ? 'relationship' : statusChance > 0.33 ? 'complicated' : 'single',
    };
};

export default function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth];
        return range(len).map((d) => {
            return {
                ...newPerson(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
            };
        });
    };

    return makeDataLevel();
}
