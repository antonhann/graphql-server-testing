export const sampleData = {
    games: [
        {
            id: "1",
            title: "The Legend of Zelda: Breath of the Wild",
            platform: ["Nintendo Switch", "Wii U"],
        },
        {
            id: "2",
            title: "God of War",
            platform: ["PlayStation 4"],
        },
        {
            id: "3",
            title: "Minecraft",
            platform: ["PC", "Xbox One", "PlayStation 4", "Nintendo Switch"],
        },
    ],
    reviews: [
        {
            id: "1",
            rating: 5,
            content: "An amazing open-world adventure that redefined gaming.",
            game_id: "1", // Reference to the game
            author_id: "1", // Reference to the author
        },
        {
            id: "2",
            rating: 4,
            content: "A fantastic story with great combat mechanics.",
            game_id: "2", // Reference to the game
            author_id: "2", // Reference to the author
        },
        {
            id: "3",
            rating: 3,
            content: "Fun game, but can get repetitive after a while.",
            game_id: "3", // Reference to the game
            author_id: "3", // Reference to the author
        },
    ],
    authors: [
        {
            id: "1",
            name: "John Doe",
            verified: true,
        },
        {
            id: "2",
            name: "Jane Smith",
            verified: false,
        },
        {
            id: "3",
            name: "Emily Johnson",
            verified: true,
        },
    ],
};
