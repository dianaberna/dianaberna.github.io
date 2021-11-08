import Guest from "../classes/Guest";
import jsonGuests from "../assets/API/guests.json";

export function fetchAll() {
    return jsonGuests.map(function (guest) {
        return new Guest(
            guest.name,
            guest.job,
            guest.youtube,
            guest.date,
            guest.season
        );
    });
}