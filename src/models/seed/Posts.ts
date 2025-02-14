export default function Posts(){
    const datetime = new Date();
    return([
        {
            id: 1,
            createdAt: datetime,
            updatedAt: datetime,
            title: "New Job at Alphabet Inc.",
            published: true,
        },
        {
            id: 2,
            createdAt: datetime,
            updatedAt: datetime,
            title: "New Job at Meta Inc.",
            published: true,
        },
        {
            id: 3,
            createdAt: datetime,
            updatedAt: datetime,
            title: "New Job at Apple Inc.",
            published: true
        },
        {
            id: 4,
            createdAt: datetime,
            updatedAt: datetime,
            title: "New Job at Feldspar Inc.",
            published: true
        },
        {
            id: 5,
            createdAt: datetime,
            updatedAt: datetime,
            title: "New Job at Traders Co.",
            published: true
        },
        {
            id: 6,
            createdAt: datetime,
            updatedAt: datetime,
            title: "New Job at Tesla Inc.",
            published: true
        },
        {
            id: 7,
            createdAt: datetime,
            updatedAt: datetime,
            title: "New Job at OpenAI Inc.",
            published: true
        },
        {
            id: 8,
            createdAt: datetime,
            updatedAt: datetime,
            title: "New Job at Techbro Inc.",
            published: true
        }
    ])
}