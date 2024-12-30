// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAu-XdUYCQ18w7c-i3dT4aEwWAYTTkiB-o",
    authDomain: "presensimagangkppnblitar.firebaseapp.com",
    databaseURL: "https://presensimagangkppnblitar.firebaseio.com",
    projectId: "presensimagangkppnblitar",
    storageBucket: "presensimagangkppnblitar.appspot.com",
    appId: "1:896722276711:android:37cd493785a190a7735fc2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);

// Reference to the data in Firebase
const presensiRef = database.ref("tbl_absensi");

// Fetch data from Firebase Realtime Database
presensiRef.on("value", (snapshot) => {
    const data = snapshot.val();
    const table = document.getElementById("presensiTable").getElementsByTagName("tbody")[0];

    // Clear the table before adding new data
    table.innerHTML = "";

    // Loop through the data and populate the table
    for (const id in data) {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.textContent = data[id].nama;
        cell2.textContent = data[id].tanggal;
        cell3.textContent = data[id].lokasi;
        cell4.textContent = data[id].keterangan;
    }
});
