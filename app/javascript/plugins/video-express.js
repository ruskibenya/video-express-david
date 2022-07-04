import * as VideoExpress from "@vonage/video-express";

let room;

function joinRoom(apiKey, sessionId, token, participantName) {
room = new VideoExpress.Room({
apiKey,
sessionId,
token,
roomContainer: 'roomContainer',
participantName,
});

room.join();

}

window.joinRoom = joinRoom;
