
const { expect } = require("@jest/globals");
const fs = require("fs");
const { it } = require("jest-circus");
let html = fs.readFileSync("./bookmark.html", 'utf8');

describe('No Previous Interaction', function () {

    document.documentElement.innerHTML = html.toString();

    test('bookmark', () => {
        let bookmark = document.getElementById('bookmark')
        expect(bookmark).toBeTruthy();
        expect(bookmark.innerHTML).toBe('bookmark');
    })

    test('Clicking Bookmark Should Create Modal', () => {
        let bookmark = document.getElementById('bookmark')
        bookmark.click()
        let swal = document.getElementsByClassName('swal2-container');
        expect(swal).toBeTruthy();
    })

    test('Local Storage Shouldnt Exist', () => {
        expect(window.localStorage.getItem('usr_apikey_choice')).toBeFalsy();
        expect(window.localStorage.getItem('cu_user_key')).toBeFalsy();
        expect(window.sessionStorage.getItem('cu_user_key')).toBeFalsy();  
    })

    test('Clicking')



});
