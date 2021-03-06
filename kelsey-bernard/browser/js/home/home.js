app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'homeCtrl'
    });
});

app.controller('homeCtrl', function ($scope, AuthService, $state) {

	$scope.kelseyConstant = 4.5
	var KC = 0
	$scope.starNames = true
	var gravitationalConstant = 6.674e-11
	var solarMass = 1.989e30
	var solarRadius = 696.3e6
	var lightYear = 9.46e15

	var stars = [
	  {
	    "catalogName": "Sun",
	    "RAHours": 0,
	    "RAMinutes": 0,
	    "decHours": 0,
	    "decMinutes": 0,
	    "L": 0,
	    "B": 0,
	    "classification": "G2V",
	    "visMag": -26.8,
	    "absMag": 4.83,
	    "prllx": 0,
	    "dist": 0,
	    "glieseNumber": 0,
	    "properName": "Sol",
	    "solarMasses": 1
	  },
	  {
	    "catalogName": "Alpha Centauri",
	    "RAHours": 14,
	    "RAMinutes": 39.6,
	    "decHours": -60,
	    "decMinutes": 50,
	    "L": 315.7,
	    "B": -0.7,
	    "classification": "G2V+K1V+M5.5V",
	    "visMag": -0.29,
	    "absMag": 4.06,
	    "prllx": 742.12,
	    "dist": 4.39,
	    "glieseNumber": "Gl 559",
	    "properName": "Rigil Kentaurus",
	    "solarMasses": 1.1
	  },
	  {
	    "catalogName": "Alpha Canis Majoris",
	    "RAHours": 6,
	    "RAMinutes": 45.1,
	    "decHours": -16,
	    "decMinutes": 42,
	    "L": 227.2,
	    "B": -8.9,
	    "classification": "A1V+DA2",
	    "visMag": -1.46,
	    "absMag": 1.43,
	    "prllx": 379.21,
	    "dist": 8.6,
	    "glieseNumber": "Gl 244",
	    "properName": "Sirius",
	    "solarMasses": 2.02
	  },
	  {
	    "catalogName": "Epsilon Eridani",
	    "RAHours": 3,
	    "RAMinutes": 32.9,
	    "decHours": -9,
	    "decMinutes": 27,
	    "L": 195.8,
	    "B": -48.1,
	    "classification": "K2V",
	    "visMag": 3.72,
	    "absMag": 6.18,
	    "prllx": 310.75,
	    "dist": 10.5,
	    "glieseNumber": "Gl 144",
	    "properName": 0,
	    "solarMasses": 0.82
	  },
	  {
	    "catalogName": "Alpha Canis Minoris",
	    "RAHours": 7,
	    "RAMinutes": 39.3,
	    "decHours": 5,
	    "decMinutes": 13,
	    "L": 213.7,
	    "B": 13,
	    "classification": "F5IV-V+DA",
	    "visMag": 0.36,
	    "absMag": 2.64,
	    "prllx": 285.93,
	    "dist": 11.41,
	    "glieseNumber": "Gl 280",
	    "properName": "Procyon",
	    "solarMasses": 0.6
	  },
	  {
	    "catalogName": "61 Cygni",
	    "RAHours": 21,
	    "RAMinutes": 6.9,
	    "decHours": 38,
	    "decMinutes": 44,
	    "L": 82.3,
	    "B": -5.8,
	    "classification": "K5V+K7V",
	    "visMag": 4.79,
	    "absMag": 7.07,
	    "prllx": 285.42,
	    "dist": 11.43,
	    "glieseNumber": "Gl 820",
	    "properName": 0,
	    "solarMasses": 0.63
	  },
	  {
	    "catalogName": "Epsilon Indi",
	    "RAHours": 22,
	    "RAMinutes": 3.4,
	    "decHours": -56,
	    "decMinutes": 47,
	    "L": 336.2,
	    "B": -48,
	    "classification": "K4V+T1+T6",
	    "visMag": 4.69,
	    "absMag": 6.89,
	    "prllx": 275.76,
	    "dist": 11.83,
	    "glieseNumber": "Gl 845",
	    "properName": 0,
	    "solarMasses": 0.762
	  },
	  {
	    "catalogName": "Tau Ceti",
	    "RAHours": 1,
	    "RAMinutes": 44.1,
	    "decHours": -15,
	    "decMinutes": 56,
	    "L": 173.1,
	    "B": -73.4,
	    "classification": "G8V",
	    "visMag": 3.49,
	    "absMag": 5.68,
	    "prllx": 274.17,
	    "dist": 11.9,
	    "glieseNumber": "Gl  71",
	    "properName": 0,
	    "solarMasses": 0.783
	  },
	  {
	    "catalogName": "Omicron² Eridani",
	    "RAHours": 4,
	    "RAMinutes": 15.3,
	    "decHours": -7,
	    "decMinutes": 39,
	    "L": 200.8,
	    "B": -38.1,
	    "classification": "K1V+DA4+M4.5V",
	    "visMag": 4.43,
	    "absMag": 5.92,
	    "prllx": 198.24,
	    "dist": 16.45,
	    "glieseNumber": "Gl 166",
	    "properName": "Keid",
	    "solarMasses": 0.84
	  },
	  {
	    "catalogName": "70 Ophiuchi",
	    "RAHours": 18,
	    "RAMinutes": 5.5,
	    "decHours": 2,
	    "decMinutes": 30,
	    "L": 29.9,
	    "B": 11.4,
	    "classification": "K0V+K5V",
	    "visMag": 4.03,
	    "absMag": 5.5,
	    "prllx": 196.62,
	    "dist": 16.59,
	    "glieseNumber": "Gl 702",
	    "properName": 0,
	    "solarMasses": 0.84
	  },
	  {
	    "catalogName": "Alpha Aquilae",
	    "RAHours": 19,
	    "RAMinutes": 50.8,
	    "decHours": 8,
	    "decMinutes": 52,
	    "L": 47.7,
	    "B": -8.9,
	    "classification": "A7V",
	    "visMag": 0.77,
	    "absMag": 2.21,
	    "prllx": 194.44,
	    "dist": 16.77,
	    "glieseNumber": "Gl 768",
	    "properName": "Altair",
	    "solarMasses": 1.79
	  },
	  {
	    "catalogName": "Sigma Draconis",
	    "RAHours": 19,
	    "RAMinutes": 32.4,
	    "decHours": 69,
	    "decMinutes": 39,
	    "L": 101.3,
	    "B": 21.9,
	    "classification": "K0V",
	    "visMag": 4.67,
	    "absMag": 5.87,
	    "prllx": 173.41,
	    "dist": 18.81,
	    "glieseNumber": "Gl 764",
	    "properName": "Alsafi",
	    "solarMasses": 0.87
	  },
	  {
	    "catalogName": "HR5568",
	    "RAHours": 14,
	    "RAMinutes": 57.5,
	    "decHours": -21,
	    "decMinutes": 24,
	    "L": 338.2,
	    "B": 32.7,
	    "classification": "K5V+M1V+M3V+T8",
	    "visMag": 5.72,
	    "absMag": 6.86,
	    "prllx": 169.32,
	    "dist": 19.26,
	    "glieseNumber": "Gl 570",
	    "properName": 0,
	    "solarMasses": 0.8
	  },
	  {
	    "catalogName": "Eta Cassiopeiae",
	    "RAHours": 0,
	    "RAMinutes": 49.1,
	    "decHours": 57,
	    "decMinutes": 48,
	    "L": 122.6,
	    "B": -5.1,
	    "classification": "G0V+K7V",
	    "visMag": 3.46,
	    "absMag": 4.59,
	    "prllx": 167.99,
	    "dist": 19.42,
	    "glieseNumber": "Gl  34",
	    "properName": "Achird",
	    "solarMasses": 0.972
	  },
	  {
	    "catalogName": "36 Ophiuchi",
	    "RAHours": 17,
	    "RAMinutes": 15.3,
	    "decHours": -26,
	    "decMinutes": 36,
	    "L": 358.3,
	    "B": 6.9,
	    "classification": "K1V+K1V+K5V",
	    "visMag": 4.33,
	    "absMag": 5.46,
	    "prllx": 167.08,
	    "dist": 19.52,
	    "glieseNumber": "Gl 663",
	    "properName": 0,
	    "solarMasses": 0.71
	  },
	  {
	    "catalogName": "HR7703",
	    "RAHours": 20,
	    "RAMinutes": 11.2,
	    "decHours": -36,
	    "decMinutes": 6,
	    "L": 5.2,
	    "B": -30.9,
	    "classification": "K3V+M3.5V",
	    "visMag": 5.32,
	    "absMag": 6.41,
	    "prllx": 165.24,
	    "dist": 19.74,
	    "glieseNumber": "Gl 783",
	    "properName": 0,
	    "solarMasses": 0.65
	  },
	  {
	    "catalogName": "82 Eridani",
	    "RAHours": 3,
	    "RAMinutes": 19.9,
	    "decHours": -43,
	    "decMinutes": 4,
	    "L": 250.8,
	    "B": -56.1,
	    "classification": "G5V",
	    "visMag": 4.26,
	    "absMag": 5.35,
	    "prllx": 165.02,
	    "dist": 19.76,
	    "glieseNumber": "Gl 139",
	    "properName": 0,
	    "solarMasses": 0.7
	  },
	  {
	    "catalogName": "Delta Pavonis",
	    "RAHours": 20,
	    "RAMinutes": 8.7,
	    "decHours": -66,
	    "decMinutes": 10,
	    "L": 329.8,
	    "B": -32.4,
	    "classification": "G5IV-V",
	    "visMag": 3.55,
	    "absMag": 4.62,
	    "prllx": 163.73,
	    "dist": 19.92,
	    "glieseNumber": "Gl 780",
	    "properName": 0,
	    "solarMasses": 0.991
	  },
	  {
	    "catalogName": "HR8832",
	    "RAHours": 23,
	    "RAMinutes": 13.3,
	    "decHours": 57,
	    "decMinutes": 10,
	    "L": 109.9,
	    "B": -3.2,
	    "classification": "K3V",
	    "visMag": 5.57,
	    "absMag": 6.5,
	    "prllx": 153.24,
	    "dist": 21.28,
	    "glieseNumber": "Gl 892",
	    "properName": 0,
	    "solarMasses": 0.794
	  },
	  {
	    "catalogName": "Xi Boötis",
	    "RAHours": 14,
	    "RAMinutes": 51.4,
	    "decHours": 19,
	    "decMinutes": 6,
	    "L": 23.1,
	    "B": 61.4,
	    "classification": "G8V+K4V",
	    "visMag": 4.54,
	    "absMag": 5.41,
	    "prllx": 149.26,
	    "dist": 21.85,
	    "glieseNumber": "Gl 566",
	    "properName": 0,
	    "solarMasses": 0.9
	  },
	  {
	    "catalogName": "HR753",
	    "RAHours": 2,
	    "RAMinutes": 36.1,
	    "decHours": 6,
	    "decMinutes": 53,
	    "L": 163.4,
	    "B": -47.6,
	    "classification": "K3V+M4.5V",
	    "visMag": 5.79,
	    "absMag": 6.5,
	    "prllx": 138.72,
	    "dist": 23.51,
	    "glieseNumber": "Gl 105",
	    "properName": 0,
	    "solarMasses": 0.81
	  },
	  {
	    "catalogName": "HR6426",
	    "RAHours": 17,
	    "RAMinutes": 19,
	    "decHours": -34,
	    "decMinutes": 59,
	    "L": 351.8,
	    "B": 1.4,
	    "classification": "K3V+K5V+M2.5V",
	    "visMag": 5.91,
	    "absMag": 6.61,
	    "prllx": 138.2,
	    "dist": 23.6,
	    "glieseNumber": "Gl 667",
	    "properName": 0,
	    "solarMasses": 0.73
	  },
	  {
	    "catalogName": "HR222",
	    "RAHours": 0,
	    "RAMinutes": 48.4,
	    "decHours": 5,
	    "decMinutes": 16,
	    "L": 121.5,
	    "B": -57.6,
	    "classification": "K2V",
	    "visMag": 5.74,
	    "absMag": 6.38,
	    "prllx": 134.04,
	    "dist": 24.33,
	    "glieseNumber": "Gl  33",
	    "properName": 0,
	    "solarMasses": 0.7
	  },
	  {
	    "catalogName": "107 Piscium",
	    "RAHours": 1,
	    "RAMinutes": 42.5,
	    "decHours": 20,
	    "decMinutes": 16,
	    "L": 138.9,
	    "B": -41,
	    "classification": "K1V",
	    "visMag": 5.24,
	    "absMag": 5.87,
	    "prllx": 133.91,
	    "dist": 24.36,
	    "glieseNumber": "Gl  68",
	    "properName": 0,
	    "solarMasses": 0.83
	  },
	  {
	    "catalogName": "Beta Hydri",
	    "RAHours": 0,
	    "RAMinutes": 25.8,
	    "decHours": -77,
	    "decMinutes": 15,
	    "L": 304.8,
	    "B": -39.8,
	    "classification": "G1IV",
	    "visMag": 2.82,
	    "absMag": 3.45,
	    "prllx": 133.78,
	    "dist": 24.38,
	    "glieseNumber": "Gl  19",
	    "properName": 0,
	    "solarMasses": 1.08
	  },
	  {
	    "catalogName": "Mu Cassiopeiae",
	    "RAHours": 1,
	    "RAMinutes": 8.3,
	    "decHours": 54,
	    "decMinutes": 55,
	    "L": 125.4,
	    "B": -7.9,
	    "classification": "G5V+M5V",
	    "visMag": 5.17,
	    "absMag": 5.78,
	    "prllx": 132.4,
	    "dist": 24.63,
	    "glieseNumber": "Gl  53",
	    "properName": 0,
	    "solarMasses": 0.74
	  },
	  {
	    "catalogName": "HR8721",
	    "RAHours": 22,
	    "RAMinutes": 56.4,
	    "decHours": -31,
	    "decMinutes": 33,
	    "L": 15.9,
	    "B": -64.6,
	    "classification": "K4V",
	    "visMag": 6.48,
	    "absMag": 7.07,
	    "prllx": 130.94,
	    "dist": 24.91,
	    "glieseNumber": "Gl 879",
	    "properName": 0,
	    "solarMasses": 0.81
	  },
	  {
	    "catalogName": "Alpha Piscis Austrini",
	    "RAHours": 22,
	    "RAMinutes": 57.7,
	    "decHours": -29,
	    "decMinutes": 37,
	    "L": 20.5,
	    "B": -64.9,
	    "classification": "A3V",
	    "visMag": 1.15,
	    "absMag": 1.72,
	    "prllx": 130.08,
	    "dist": 25.07,
	    "glieseNumber": "Gl 881",
	    "properName": "Fomalhaut",
	    "solarMasses": 1.92
	  },
	  {
	    "catalogName": "Alpha Lyrae",
	    "RAHours": 18,
	    "RAMinutes": 36.9,
	    "decHours": 38,
	    "decMinutes": 47,
	    "L": 67.5,
	    "B": 19.2,
	    "classification": "A0V",
	    "visMag": 0.03,
	    "absMag": 0.58,
	    "prllx": 128.93,
	    "dist": 25.3,
	    "glieseNumber": "Gl 721",
	    "properName": "Vega",
	    "solarMasses": 2.135
	  },
	  {
	    "catalogName": "Pi³ Orionis",
	    "RAHours": 4,
	    "RAMinutes": 49.8,
	    "decHours": 6,
	    "decMinutes": 57,
	    "L": 191.5,
	    "B": -23.1,
	    "classification": "F6V",
	    "visMag": 3.19,
	    "absMag": 3.67,
	    "prllx": 124.6,
	    "dist": 26.18,
	    "glieseNumber": "Gl 178",
	    "properName": "Tabit",
	    "solarMasses": 1.236
	  },
	  {
	    "catalogName": "Chi Draconis",
	    "RAHours": 18,
	    "RAMinutes": 21.1,
	    "decHours": 72,
	    "decMinutes": 43,
	    "L": 103.5,
	    "B": 28.1,
	    "classification": "F7V+G?",
	    "visMag": 3.55,
	    "absMag": 4.02,
	    "prllx": 124.11,
	    "dist": 26.28,
	    "glieseNumber": "Gl 713",
	    "properName": 0,
	    "solarMasses": 1.029
	  },
	  {
	    "catalogName": "p Eridani",
	    "RAHours": 1,
	    "RAMinutes": 39.8,
	    "decHours": -56,
	    "decMinutes": 11,
	    "L": 289.6,
	    "B": -59.7,
	    "classification": "K0V+K2V",
	    "visMag": 5.07,
	    "absMag": 5.52,
	    "prllx": 122.75,
	    "dist": 26.57,
	    "glieseNumber": "Gl  66",
	    "properName": 0,
	    "solarMasses": 0.86
	  },
	  {
	    "catalogName": "Xi Ursae Majoris",
	    "RAHours": 11,
	    "RAMinutes": 18.2,
	    "decHours": 31,
	    "decMinutes": 32,
	    "L": 195.1,
	    "B": 69.3,
	    "classification": "G0V+G5V+K?+M?",
	    "visMag": 3.79,
	    "absMag": 4.18,
	    "prllx": 119.7,
	    "dist": 27.2,
	    "glieseNumber": "Gl 423",
	    "properName": "Alula Australis",
	    "solarMasses": 1.05
	  },
	  {
	    "catalogName": "Beta Canum Venaticorum",
	    "RAHours": 12,
	    "RAMinutes": 33.7,
	    "decHours": 41,
	    "decMinutes": 21,
	    "L": 136.1,
	    "B": 75.3,
	    "classification": "G0V",
	    "visMag": 4.24,
	    "absMag": 4.63,
	    "prllx": 119.46,
	    "dist": 27.3,
	    "glieseNumber": "Gl 475",
	    "properName": "Chara",
	    "solarMasses": 1.08
	  },
	  {
	    "catalogName": "Mu Herculis",
	    "RAHours": 17,
	    "RAMinutes": 46.5,
	    "decHours": 27,
	    "decMinutes": 43,
	    "L": 52.4,
	    "B": 25.6,
	    "classification": "G5IV+M3V+M4V",
	    "visMag": 3.42,
	    "absMag": 3.81,
	    "prllx": 119.05,
	    "dist": 27.4,
	    "glieseNumber": "Gl 695",
	    "properName": 0,
	    "solarMasses": 1
	  },
	  {
	    "catalogName": "61 Virginis",
	    "RAHours": 13,
	    "RAMinutes": 18.6,
	    "decHours": -18,
	    "decMinutes": 18,
	    "L": 311.9,
	    "B": 44.1,
	    "classification": "G6V",
	    "visMag": 4.74,
	    "absMag": 5.09,
	    "prllx": 117.3,
	    "dist": 27.81,
	    "glieseNumber": "Gl 506",
	    "properName": 0,
	    "solarMasses": 0.945
	  },
	  {
	    "catalogName": "Zeta Tucanae",
	    "RAHours": 0,
	    "RAMinutes": 20.1,
	    "decHours": -64,
	    "decMinutes": 52,
	    "L": 308.3,
	    "B": -51.9,
	    "classification": "G0V",
	    "visMag": 4.23,
	    "absMag": 4.56,
	    "prllx": 116.38,
	    "dist": 28.03,
	    "glieseNumber": "Gl  17",
	    "properName": 0,
	    "solarMasses": 0.99
	  },
	  {
	    "catalogName": "Chi¹ Orionis",
	    "RAHours": 5,
	    "RAMinutes": 54.4,
	    "decHours": 20,
	    "decMinutes": 16,
	    "L": 188.5,
	    "B": -2.7,
	    "classification": "G0V+M?",
	    "visMag": 4.39,
	    "absMag": 4.7,
	    "prllx": 115.43,
	    "dist": 28.26,
	    "glieseNumber": "Gl 222",
	    "properName": 0,
	    "solarMasses": 1
	  },
	  {
	    "catalogName": "HR6416",
	    "RAHours": 17,
	    "RAMinutes": 19.1,
	    "decHours": -46,
	    "decMinutes": 38,
	    "L": 342.3,
	    "B": -5.3,
	    "classification": "G8V+M0V",
	    "visMag": 5.47,
	    "absMag": 5.75,
	    "prllx": 113.81,
	    "dist": 28.66,
	    "glieseNumber": "Gl 666",
	    "properName": 0,
	    "solarMasses": 0.81
	  },
	  {
	    "catalogName": "HR1614",
	    "RAHours": 5,
	    "RAMinutes": 0.8,
	    "decHours": -5,
	    "decMinutes": 45,
	    "L": 205.1,
	    "B": -27.2,
	    "classification": "K3V",
	    "visMag": 6.22,
	    "absMag": 6.49,
	    "prllx": 113.46,
	    "dist": 28.75,
	    "glieseNumber": "Gl 183",
	    "properName": 0,
	    "solarMasses": 0.838
	  },
	  {
	    "catalogName": "HR7722",
	    "RAHours": 20,
	    "RAMinutes": 15.3,
	    "decHours": -27,
	    "decMinutes": 1,
	    "L": 15.6,
	    "B": -29.4,
	    "classification": "K1V",
	    "visMag": 5.73,
	    "absMag": 6,
	    "prllx": 113.33,
	    "dist": 28.78,
	    "glieseNumber": "Gl 785",
	    "properName": 0,
	    "solarMasses": 0.78
	  },
	  {
	    "catalogName": "Gamma Leporis",
	    "RAHours": 5,
	    "RAMinutes": 44.5,
	    "decHours": -22,
	    "decMinutes": 26,
	    "L": 226.8,
	    "B": -24.3,
	    "classification": "F7V+K2V",
	    "visMag": 3.59,
	    "absMag": 3.83,
	    "prllx": 111.49,
	    "dist": 29.25,
	    "glieseNumber": "Gl 216",
	    "properName": 0,
	    "solarMasses": 1.23
	  },
	  {
	    "catalogName": "Delta Eridani",
	    "RAHours": 3,
	    "RAMinutes": 43.2,
	    "decHours": -9,
	    "decMinutes": 45,
	    "L": 198.1,
	    "B": -46,
	    "classification": "K0IV",
	    "visMag": 3.52,
	    "absMag": 3.74,
	    "prllx": 110.58,
	    "dist": 29.5,
	    "glieseNumber": "Gl 150",
	    "properName": "Rana",
	    "solarMasses": 1.33
	  },
	  {
	    "catalogName": "Beta Comae Berenices",
	    "RAHours": 13,
	    "RAMinutes": 11.9,
	    "decHours": 27,
	    "decMinutes": 52,
	    "L": 43.5,
	    "B": 85.4,
	    "classification": "G0V",
	    "visMag": 4.23,
	    "absMag": 4.43,
	    "prllx": 109.23,
	    "dist": 29.86,
	    "glieseNumber": "Gl 502",
	    "properName": 0,
	    "solarMasses": 1.15
	  },
	  {
	    "catalogName": "HR4550",
	    "RAHours": 11,
	    "RAMinutes": 53,
	    "decHours": 37,
	    "decMinutes": 43,
	    "L": 168.5,
	    "B": 73.8,
	    "classification": "G8V+M5.5V",
	    "visMag": 6.42,
	    "absMag": 6.61,
	    "prllx": 109.21,
	    "dist": 29.87,
	    "glieseNumber": "Gl 451",
	    "properName": 0,
	    "solarMasses": 0.6
	  },
	  {
	    "catalogName": "Kappa¹ Ceti",
	    "RAHours": 3,
	    "RAMinutes": 19.4,
	    "decHours": 3,
	    "decMinutes": 22,
	    "L": 178.2,
	    "B": -43.1,
	    "classification": "G5V",
	    "visMag": 4.84,
	    "absMag": 5.03,
	    "prllx": 109.18,
	    "dist": 29.87,
	    "glieseNumber": "Gl 137",
	    "properName": 0,
	    "solarMasses": 1
	  },
	  {
	    "catalogName": "Gamma Pavonis",
	    "RAHours": 21,
	    "RAMinutes": 26.4,
	    "decHours": -65,
	    "decMinutes": 21,
	    "L": 328.2,
	    "B": -40.3,
	    "classification": "F7V",
	    "visMag": 4.21,
	    "absMag": 4.39,
	    "prllx": 108.5,
	    "dist": 30.06,
	    "glieseNumber": "Gl 827",
	    "properName": 0,
	    "solarMasses": 1.21
	  },
	  {
	    "catalogName": "HR4523",
	    "RAHours": 11,
	    "RAMinutes": 46.5,
	    "decHours": -40,
	    "decMinutes": 30,
	    "L": 289.8,
	    "B": 20.7,
	    "classification": "G5V+M4V",
	    "visMag": 4.89,
	    "absMag": 5.06,
	    "prllx": 108.23,
	    "dist": 30.14,
	    "glieseNumber": "Gl 442",
	    "properName": 0,
	    "solarMasses": 0.85
	  },
	  {
	    "catalogName": "HR4458",
	    "RAHours": 11,
	    "RAMinutes": 34.5,
	    "decHours": -32,
	    "decMinutes": 49,
	    "L": 284.8,
	    "B": 27.3,
	    "classification": "K0V+DC",
	    "visMag": 5.96,
	    "absMag": 6.06,
	    "prllx": 104.84,
	    "dist": 31.11,
	    "glieseNumber": "Gl 432",
	    "properName": 0,
	    "solarMasses": 0.87
	  },
	  {
	    "catalogName": "61 Ursae Majoris",
	    "RAHours": 11,
	    "RAMinutes": 41.1,
	    "decHours": 34,
	    "decMinutes": 12,
	    "L": 183.6,
	    "B": 73.3,
	    "classification": "G8V",
	    "visMag": 5.31,
	    "absMag": 5.41,
	    "prllx": 104.81,
	    "dist": 31.12,
	    "glieseNumber": "Gl 434",
	    "properName": 0,
	    "solarMasses": 0.85
	  },
	  {
	    "catalogName": "12 Ophiuchi",
	    "RAHours": 16,
	    "RAMinutes": 36.4,
	    "decHours": -2,
	    "decMinutes": 19,
	    "L": 13.7,
	    "B": 28.4,
	    "classification": "K0V",
	    "visMag": 5.77,
	    "absMag": 5.82,
	    "prllx": 102.27,
	    "dist": 31.89,
	    "glieseNumber": "Gl 631",
	    "properName": 0,
	    "solarMasses": 0.91
	  },
	  {
	    "catalogName": "HR511",
	    "RAHours": 1,
	    "RAMinutes": 47.7,
	    "decHours": 63,
	    "decMinutes": 51,
	    "L": 129.1,
	    "B": 1.7,
	    "classification": "K0V",
	    "visMag": 5.63,
	    "absMag": 5.64,
	    "prllx": 100.24,
	    "dist": 32.54,
	    "glieseNumber": "Gl  75",
	    "properName": 0,
	    "solarMasses": 0.825
	  },
	  {
	    "catalogName": "HR5256",
	    "RAHours": 13,
	    "RAMinutes": 57.5,
	    "decHours": 61,
	    "decMinutes": 29,
	    "L": 109.6,
	    "B": 53.9,
	    "classification": "K3V",
	    "visMag": 6.49,
	    "absMag": 6.47,
	    "prllx": 98.97,
	    "dist": 32.96,
	    "glieseNumber": 0,
	    "properName": 0,
	    "solarMasses": 0.8
	  },
	  {
	    "catalogName": "Alpha Mensae",
	    "RAHours": 6,
	    "RAMinutes": 10.2,
	    "decHours": -74,
	    "decMinutes": 45,
	    "L": 285.8,
	    "B": -28.8,
	    "classification": "G5V",
	    "visMag": 5.08,
	    "absMag": 5.05,
	    "prllx": 98.54,
	    "dist": 33.1,
	    "glieseNumber": "Gl 231",
	    "properName": 0,
	    "solarMasses": 1.103
	  },
	  {
	    "catalogName": "Beta Geminorum",
	    "RAHours": 7,
	    "RAMinutes": 45.3,
	    "decHours": 28,
	    "decMinutes": 1,
	    "L": 192.2,
	    "B": 23.4,
	    "classification": "K0III",
	    "visMag": 1.14,
	    "absMag": 1.07,
	    "prllx": 96.74,
	    "dist": 33.72,
	    "glieseNumber": "Gl 286",
	    "properName": "Pollux",
	    "solarMasses": 2.04
	  },
	  {
	    "catalogName": "HR857",
	    "RAHours": 2,
	    "RAMinutes": 52.5,
	    "decHours": -12,
	    "decMinutes": 46,
	    "L": 192.1,
	    "B": -58.3,
	    "classification": "K1V",
	    "visMag": 6.05,
	    "absMag": 5.97,
	    "prllx": 96.33,
	    "dist": 33.86,
	    "glieseNumber": "Gl 117",
	    "properName": 0,
	    "solarMasses": 0.7
	  },
	  {
	    "catalogName": "Iota Persei",
	    "RAHours": 3,
	    "RAMinutes": 9.1,
	    "decHours": 49,
	    "decMinutes": 36,
	    "L": 144.6,
	    "B": -7.4,
	    "classification": "G0V",
	    "visMag": 4.05,
	    "absMag": 3.94,
	    "prllx": 94.93,
	    "dist": 34.36,
	    "glieseNumber": "Gl 124",
	    "properName": 0,
	    "solarMasses": 1.35
	  },
	  {
	    "catalogName": "HR9038",
	    "RAHours": 23,
	    "RAMinutes": 52.4,
	    "decHours": 75,
	    "decMinutes": 32,
	    "L": 119.2,
	    "B": 13.1,
	    "classification": "K3V+M2V",
	    "visMag": 6.36,
	    "absMag": 6.19,
	    "prllx": 92.68,
	    "dist": 35.19,
	    "glieseNumber": "Gl 909",
	    "properName": 0,
	    "solarMasses": 0.7
	  },
	  {
	    "catalogName": "Zeta Herculis",
	    "RAHours": 16,
	    "RAMinutes": 41.3,
	    "decHours": 31,
	    "decMinutes": 36,
	    "L": 52.7,
	    "B": 40.3,
	    "classification": "G0IV+G7V",
	    "visMag": 2.81,
	    "absMag": 2.64,
	    "prllx": 92.63,
	    "dist": 35.21,
	    "glieseNumber": "Gl 635",
	    "properName": "Rutilicus",
	    "solarMasses": 1.45
	  },
	  {
	    "catalogName": "Delta Trianguli",
	    "RAHours": 2,
	    "RAMinutes": 17.1,
	    "decHours": 34,
	    "decMinutes": 13,
	    "L": 142.4,
	    "B": -25.4,
	    "classification": "G0V+M5V",
	    "visMag": 4.84,
	    "absMag": 4.66,
	    "prllx": 92.2,
	    "dist": 35.38,
	    "glieseNumber": "Gl  92",
	    "properName": 0,
	    "solarMasses": 1
	  },
	  {
	    "catalogName": "Beta Virginis",
	    "RAHours": 11,
	    "RAMinutes": 50.7,
	    "decHours": 1,
	    "decMinutes": 45,
	    "L": 270.5,
	    "B": 60.8,
	    "classification": "F8V",
	    "visMag": 3.59,
	    "absMag": 3.4,
	    "prllx": 91.74,
	    "dist": 35.55,
	    "glieseNumber": "Gl 449",
	    "properName": "Zavijava",
	    "solarMasses": 1.25
	  },
	  {
	    "catalogName": "HR637",
	    "RAHours": 2,
	    "RAMinutes": 10.4,
	    "decHours": -50,
	    "decMinutes": 49,
	    "L": 275.9,
	    "B": -62,
	    "classification": "K0V",
	    "visMag": 6.12,
	    "absMag": 5.93,
	    "prllx": 91.63,
	    "dist": 35.6,
	    "glieseNumber": "Gl  86",
	    "properName": 0,
	    "solarMasses": 0.77
	  },
	  {
	    "catalogName": "Beta Leonis",
	    "RAHours": 11,
	    "RAMinutes": 49.1,
	    "decHours": 14,
	    "decMinutes": 34,
	    "L": 250.6,
	    "B": 70.8,
	    "classification": "A3V",
	    "visMag": 2.14,
	    "absMag": 1.92,
	    "prllx": 90.16,
	    "dist": 36.18,
	    "glieseNumber": "Gl 448",
	    "properName": "Denebola",
	    "solarMasses": 1.75
	  },
	  {
	    "catalogName": "HR6806",
	    "RAHours": 18,
	    "RAMinutes": 9.6,
	    "decHours": 38,
	    "decMinutes": 27,
	    "L": 65.3,
	    "B": 24.2,
	    "classification": "K2V",
	    "visMag": 6.38,
	    "absMag": 6.15,
	    "prllx": 90.11,
	    "dist": 36.2,
	    "glieseNumber": "Gl 706",
	    "properName": 0,
	    "solarMasses": 0.7
	  },
	  {
	    "catalogName": "54 Piscium",
	    "RAHours": 0,
	    "RAMinutes": 39.4,
	    "decHours": 21,
	    "decMinutes": 15,
	    "L": 119.2,
	    "B": -41.5,
	    "classification": "K0V",
	    "visMag": 5.88,
	    "absMag": 5.65,
	    "prllx": 90.03,
	    "dist": 36.23,
	    "glieseNumber": "Gl  27",
	    "properName": 0,
	    "solarMasses": 0.76
	  },
	  {
	    "catalogName": "Gamma Serpentis",
	    "RAHours": 15,
	    "RAMinutes": 56.5,
	    "decHours": 15,
	    "decMinutes": 39,
	    "L": 27.7,
	    "B": 45.7,
	    "classification": "F6V",
	    "visMag": 3.85,
	    "absMag": 3.62,
	    "prllx": 89.92,
	    "dist": 36.27,
	    "glieseNumber": "Gl 603",
	    "properName": 0,
	    "solarMasses": 1.3
	  },
	  {
	    "catalogName": "11 Leonis Minoris",
	    "RAHours": 9,
	    "RAMinutes": 35.7,
	    "decHours": 35,
	    "decMinutes": 48,
	    "L": 188.5,
	    "B": 47.8,
	    "classification": "G8V+M5V",
	    "visMag": 5.4,
	    "absMag": 5.16,
	    "prllx": 89.45,
	    "dist": 36.46,
	    "glieseNumber": "Gl 356",
	    "properName": 0,
	    "solarMasses": 0.964
	  },
	  {
	    "catalogName": "Theta Persei",
	    "RAHours": 2,
	    "RAMinutes": 44.2,
	    "decHours": 49,
	    "decMinutes": 13,
	    "L": 141.2,
	    "B": -9.6,
	    "classification": "F7V+M1V",
	    "visMag": 4.1,
	    "absMag": 3.85,
	    "prllx": 89.03,
	    "dist": 36.63,
	    "glieseNumber": "Gl 107",
	    "properName": 0,
	    "solarMasses": 1.138
	  },
	  {
	    "catalogName": "Alpha Boötis",
	    "RAHours": 14,
	    "RAMinutes": 15.7,
	    "decHours": 19,
	    "decMinutes": 10,
	    "L": 15.1,
	    "B": 69.1,
	    "classification": "K2III",
	    "visMag": -0.05,
	    "absMag": -0.31,
	    "prllx": 88.85,
	    "dist": 36.71,
	    "glieseNumber": "Gl 541",
	    "properName": "Arcturus",
	    "solarMasses": 1.1
	  },
	  {
	    "catalogName": "Eta Boötis",
	    "RAHours": 13,
	    "RAMinutes": 54.7,
	    "decHours": 18,
	    "decMinutes": 23,
	    "L": 5.3,
	    "B": 73,
	    "classification": "G0IV",
	    "visMag": 2.68,
	    "absMag": 2.41,
	    "prllx": 88.17,
	    "dist": 36.99,
	    "glieseNumber": "Gl 534",
	    "properName": "Muphrid",
	    "solarMasses": 1.71
	  },
	  {
	    "catalogName": "HR5553",
	    "RAHours": 14,
	    "RAMinutes": 53.4,
	    "decHours": 19,
	    "decMinutes": 9,
	    "L": 23.6,
	    "B": 60.9,
	    "classification": "K1V",
	    "visMag": 6,
	    "absMag": 5.69,
	    "prllx": 86.69,
	    "dist": 37.62,
	    "glieseNumber": "Gl 567",
	    "properName": 0,
	    "solarMasses": 0.45
	  },
	  {
	    "catalogName": "Zeta Doradus",
	    "RAHours": 5,
	    "RAMinutes": 5.5,
	    "decHours": -57,
	    "decMinutes": 28,
	    "L": 266,
	    "B": -36.7,
	    "classification": "F7V+K7V",
	    "visMag": 4.71,
	    "absMag": 4.38,
	    "prllx": 85.83,
	    "dist": 38,
	    "glieseNumber": "Gl 189",
	    "properName": 0,
	    "solarMasses": 1.07
	  },
	  {
	    "catalogName": "Lambda Serpentis",
	    "RAHours": 15,
	    "RAMinutes": 46.4,
	    "decHours": 7,
	    "decMinutes": 21,
	    "L": 15.7,
	    "B": 44.1,
	    "classification": "G0V",
	    "visMag": 4.42,
	    "absMag": 4.07,
	    "prllx": 85.08,
	    "dist": 38.34,
	    "glieseNumber": "Gl 598",
	    "properName": 0,
	    "solarMasses": 1.14
	  },
	  {
	    "catalogName": "Iota Pegasi",
	    "RAHours": 22,
	    "RAMinutes": 7,
	    "decHours": 25,
	    "decMinutes": 20,
	    "L": 82.3,
	    "B": -24.3,
	    "classification": "F5V",
	    "visMag": 3.77,
	    "absMag": 3.42,
	    "prllx": 85.06,
	    "dist": 38.34,
	    "glieseNumber": "Gl 848",
	    "properName": 0,
	    "solarMasses": 0.82
	  },
	  {
	    "catalogName": "Delta Capricorni",
	    "RAHours": 21,
	    "RAMinutes": 47,
	    "decHours": -16,
	    "decMinutes": 7,
	    "L": 37.6,
	    "B": -46,
	    "classification": "A5V",
	    "visMag": 2.85,
	    "absMag": 2.49,
	    "prllx": 84.58,
	    "dist": 38.56,
	    "glieseNumber": "Gl 837",
	    "properName": "Deneb Algedi",
	    "solarMasses": 2
	  },
	  {
	    "catalogName": "Gamma Virginis",
	    "RAHours": 12,
	    "RAMinutes": 41.7,
	    "decHours": -1,
	    "decMinutes": 26,
	    "L": 297.8,
	    "B": 61.3,
	    "classification": "F0V+F0V",
	    "visMag": 2.74,
	    "absMag": 2.38,
	    "prllx": 84.53,
	    "dist": 38.59,
	    "glieseNumber": "Gl 482",
	    "properName": "Porrima",
	    "solarMasses": 1.56
	  },
	  {
	    "catalogName": "Zeta Reticuli",
	    "RAHours": 3,
	    "RAMinutes": 18.2,
	    "decHours": -62,
	    "decMinutes": 30,
	    "L": 279,
	    "B": -47.2,
	    "classification": "G1V+G2V",
	    "visMag": 4.62,
	    "absMag": 4.21,
	    "prllx": 82.65,
	    "dist": 39.46,
	    "glieseNumber": "Gl 138",
	    "properName": 0,
	    "solarMasses": 0.958
	  },
	  {
	    "catalogName": "Zeta Trianguli Australis",
	    "RAHours": 16,
	    "RAMinutes": 28.5,
	    "decHours": -70,
	    "decMinutes": 5,
	    "L": 319.5,
	    "B": -14.6,
	    "classification": "F9V",
	    "visMag": 4.9,
	    "absMag": 4.49,
	    "prllx": 82.61,
	    "dist": 39.48,
	    "glieseNumber": "Gl 624",
	    "properName": 0,
	    "solarMasses": 1.12
	  },
	  {
	    "catalogName": "HR3384",
	    "RAHours": 8,
	    "RAMinutes": 32.9,
	    "decHours": -31,
	    "decMinutes": 30,
	    "L": 252.3,
	    "B": 5,
	    "classification": "K0V",
	    "visMag": 6.38,
	    "absMag": 5.95,
	    "prllx": 82.15,
	    "dist": 39.7,
	    "glieseNumber": "Gl 309",
	    "properName": 0,
	    "solarMasses": 0.75
	  },
	  {
	    "catalogName": "HR1925",
	    "RAHours": 5,
	    "RAMinutes": 41.3,
	    "decHours": 53,
	    "decMinutes": 28,
	    "L": 158.4,
	    "B": 12,
	    "classification": "K1V+M1V",
	    "visMag": 6.21,
	    "absMag": 5.77,
	    "prllx": 81.69,
	    "dist": 39.93,
	    "glieseNumber": "Gl 211",
	    "properName": 0,
	    "solarMasses": 0.871
	  },
	  {
	    "catalogName": "Beta Trianguli Australis",
	    "RAHours": 15,
	    "RAMinutes": 55.1,
	    "decHours": -63,
	    "decMinutes": 25,
	    "L": 321.9,
	    "B": -7.5,
	    "classification": "F2IV",
	    "visMag": 2.83,
	    "absMag": 2.38,
	    "prllx": 81.24,
	    "dist": 40.15,
	    "glieseNumber": "Gl 601",
	    "properName": 0,
	    "solarMasses": 1.1
	  },
	  {
	    "catalogName": "85 Pegasi",
	    "RAHours": 0,
	    "RAMinutes": 2.2,
	    "decHours": 27,
	    "decMinutes": 4,
	    "L": 109.6,
	    "B": -34.5,
	    "classification": "G3V+K6V",
	    "visMag": 5.8,
	    "absMag": 5.33,
	    "prllx": 80.63,
	    "dist": 40.45,
	    "glieseNumber": "Gl 914",
	    "properName": 0,
	    "solarMasses": 0.88
	  },
	  {
	    "catalogName": "Rho¹ Cancri",
	    "RAHours": 8,
	    "RAMinutes": 52.6,
	    "decHours": 28,
	    "decMinutes": 19,
	    "L": 196.8,
	    "B": 37.7,
	    "classification": "G8V+M3.5V",
	    "visMag": 5.96,
	    "absMag": 5.47,
	    "prllx": 79.8,
	    "dist": 40.87,
	    "glieseNumber": "Gl 324",
	    "properName": 0,
	    "solarMasses": 0.95
	  },
	  {
	    "catalogName": "HR3259",
	    "RAHours": 8,
	    "RAMinutes": 18.4,
	    "decHours": -12,
	    "decMinutes": 37,
	    "L": 234.6,
	    "B": 12.8,
	    "classification": "G8V",
	    "visMag": 5.95,
	    "absMag": 5.45,
	    "prllx": 79.48,
	    "dist": 41.04,
	    "glieseNumber": "Gl 302",
	    "properName": 0,
	    "solarMasses": 0.863
	  },
	  {
	    "catalogName": "HR483",
	    "RAHours": 1,
	    "RAMinutes": 41.8,
	    "decHours": 42,
	    "decMinutes": 36,
	    "L": 132.7,
	    "B": -19.3,
	    "classification": "G2V",
	    "visMag": 4.96,
	    "absMag": 4.45,
	    "prllx": 79.09,
	    "dist": 41.24,
	    "glieseNumber": "Gl  67",
	    "properName": 0,
	    "solarMasses": 0.97
	  },
	  {
	    "catalogName": "Lambda Aurigae",
	    "RAHours": 5,
	    "RAMinutes": 19.1,
	    "decHours": 40,
	    "decMinutes": 5,
	    "L": 167.7,
	    "B": 1.5,
	    "classification": "G0V",
	    "visMag": 4.69,
	    "absMag": 4.18,
	    "prllx": 79.08,
	    "dist": 41.24,
	    "glieseNumber": "Gl 197",
	    "properName": 0,
	    "solarMasses": 1.08
	  },
	  {
	    "catalogName": "HR683",
	    "RAHours": 2,
	    "RAMinutes": 19,
	    "decHours": -25,
	    "decMinutes": 56,
	    "L": 214.5,
	    "B": -70.4,
	    "classification": "G8V",
	    "visMag": 6.33,
	    "absMag": 5.81,
	    "prllx": 78.88,
	    "dist": 41.35,
	    "glieseNumber": "Gl  95",
	    "properName": 0,
	    "solarMasses": 0.821
	  },
	  {
	    "catalogName": "44 Boötis",
	    "RAHours": 15,
	    "RAMinutes": 3.8,
	    "decHours": 47,
	    "decMinutes": 39,
	    "L": 80.4,
	    "B": 57.1,
	    "classification": "G1V+G2V",
	    "visMag": 4.83,
	    "absMag": 4.3,
	    "prllx": 78.39,
	    "dist": 41.61,
	    "glieseNumber": "Gl 575",
	    "properName": 0,
	    "solarMasses": 1.05
	  },
	  {
	    "catalogName": "HR6518",
	    "RAHours": 17,
	    "RAMinutes": 25,
	    "decHours": 67,
	    "decMinutes": 18,
	    "L": 97.6,
	    "B": 33.2,
	    "classification": "K0V",
	    "visMag": 6.44,
	    "absMag": 5.9,
	    "prllx": 78.14,
	    "dist": 41.74,
	    "glieseNumber": "Gl 675",
	    "properName": 0,
	    "solarMasses": 0.729
	  },
	  {
	    "catalogName": "36 Ursae Majoris",
	    "RAHours": 10,
	    "RAMinutes": 30.6,
	    "decHours": 55,
	    "decMinutes": 58,
	    "L": 154.3,
	    "B": 51.7,
	    "classification": "F8V+K7V",
	    "visMag": 4.82,
	    "absMag": 4.28,
	    "prllx": 77.82,
	    "dist": 41.91,
	    "glieseNumber": "Gl 395",
	    "properName": 0,
	    "solarMasses": 1.121
	  },
	  {
	    "catalogName": "HR6094",
	    "RAHours": 16,
	    "RAMinutes": 24,
	    "decHours": -39,
	    "decMinutes": 11,
	    "L": 341.6,
	    "B": 7.2,
	    "classification": "G3V+DA2",
	    "visMag": 5.37,
	    "absMag": 4.82,
	    "prllx": 77.69,
	    "dist": 41.98,
	    "glieseNumber": "Gl 620",
	    "properName": 0,
	    "solarMasses": 0.92
	  },
	  {
	    "catalogName": "HR4587",
	    "RAHours": 12,
	    "RAMinutes": 0.7,
	    "decHours": -10,
	    "decMinutes": 26,
	    "L": 283.1,
	    "B": 50.5,
	    "classification": "K0IV",
	    "visMag": 5.54,
	    "absMag": 4.99,
	    "prllx": 77.48,
	    "dist": 42.1,
	    "glieseNumber": "Gl 454",
	    "properName": 0,
	    "solarMasses": 1.01
	  },
	  {
	    "catalogName": "Alpha Aurigae",
	    "RAHours": 5,
	    "RAMinutes": 16.7,
	    "decHours": 45,
	    "decMinutes": 59,
	    "L": 162.6,
	    "B": 4.6,
	    "classification": "G5III+G0III+M2V+M4V",
	    "visMag": 0.07,
	    "absMag": -0.49,
	    "prllx": 77.29,
	    "dist": 42.2,
	    "glieseNumber": "Gl 194",
	    "properName": "Capella",
	    "solarMasses": 2.57
	  },
	  {
	    "catalogName": "HR6998",
	    "RAHours": 18,
	    "RAMinutes": 38.9,
	    "decHours": -21,
	    "decMinutes": 3,
	    "L": 12.7,
	    "B": -6.8,
	    "classification": "G5V",
	    "visMag": 5.85,
	    "absMag": 5.28,
	    "prllx": 77.02,
	    "dist": 42.35,
	    "glieseNumber": "Gl 722",
	    "properName": 0,
	    "solarMasses": 0.865
	  },
	  {
	    "catalogName": "58 Eridani",
	    "RAHours": 4,
	    "RAMinutes": 47.6,
	    "decHours": -16,
	    "decMinutes": 56,
	    "L": 215.4,
	    "B": -34.8,
	    "classification": "G3V",
	    "visMag": 5.49,
	    "absMag": 4.87,
	    "prllx": 75.1,
	    "dist": 43.43,
	    "glieseNumber": "Gl 177",
	    "properName": 0,
	    "solarMasses": 1.053
	  },
	  {
	    "catalogName": "Upsilon Andromedae",
	    "RAHours": 1,
	    "RAMinutes": 36.8,
	    "decHours": 41,
	    "decMinutes": 24,
	    "L": 132,
	    "B": -20.7,
	    "classification": "F8V+M4.5V",
	    "visMag": 4.1,
	    "absMag": 3.45,
	    "prllx": 74.25,
	    "dist": 43.93,
	    "glieseNumber": "Gl  61",
	    "properName": 0,
	    "solarMasses": 1.27
	  },
	  {
	    "catalogName": "Theta Ursae Majoris",
	    "RAHours": 9,
	    "RAMinutes": 32.9,
	    "decHours": 51,
	    "decMinutes": 40,
	    "L": 165.5,
	    "B": 45.7,
	    "classification": "F6IV+M?",
	    "visMag": 3.17,
	    "absMag": 2.52,
	    "prllx": 74.15,
	    "dist": 43.99,
	    "glieseNumber": "Gl 354",
	    "properName": "Al Haud",
	    "solarMasses": 1.41
	  },
	  {
	    "catalogName": "HR8501",
	    "RAHours": 22,
	    "RAMinutes": 18.3,
	    "decHours": -53,
	    "decMinutes": 37,
	    "L": 339,
	    "B": -51.4,
	    "classification": "G1V+M?",
	    "visMag": 5.36,
	    "absMag": 4.69,
	    "prllx": 73.47,
	    "dist": 44.39,
	    "glieseNumber": "Gl 853",
	    "properName": 0,
	    "solarMasses": 0.96
	  },
	  {
	    "catalogName": "HR8",
	    "RAHours": 0,
	    "RAMinutes": 6.6,
	    "decHours": 29,
	    "decMinutes": 1,
	    "L": 111.3,
	    "B": -32.8,
	    "classification": "G8V",
	    "visMag": 6.07,
	    "absMag": 5.39,
	    "prllx": 72.98,
	    "dist": 44.69,
	    "glieseNumber": "Gl   5",
	    "properName": 0,
	    "solarMasses": 1
	  },
	  {
	    "catalogName": "Beta Aquilae",
	    "RAHours": 19,
	    "RAMinutes": 55.3,
	    "decHours": 6,
	    "decMinutes": 24,
	    "L": 46.1,
	    "B": -11.1,
	    "classification": "G8IV+M3V",
	    "visMag": 3.71,
	    "absMag": 3.03,
	    "prllx": 72.95,
	    "dist": 44.71,
	    "glieseNumber": "Gl 771",
	    "properName": "Alshain",
	    "solarMasses": 1.26
	  },
	  {
	    "catalogName": "10 Tauri",
	    "RAHours": 3,
	    "RAMinutes": 36.9,
	    "decHours": 0,
	    "decMinutes": 24,
	    "L": 185.1,
	    "B": -41.7,
	    "classification": "F8V",
	    "visMag": 4.29,
	    "absMag": 3.6,
	    "prllx": 72.89,
	    "dist": 44.75,
	    "glieseNumber": "Gl 147",
	    "properName": 0,
	    "solarMasses": 1.18
	  },
	  {
	    "catalogName": "Iota Piscium",
	    "RAHours": 23,
	    "RAMinutes": 40,
	    "decHours": 5,
	    "decMinutes": 37,
	    "L": 92.5,
	    "B": -53,
	    "classification": "F7V",
	    "visMag": 4.13,
	    "absMag": 3.43,
	    "prllx": 72.51,
	    "dist": 44.98,
	    "glieseNumber": "Gl 904",
	    "properName": 0,
	    "solarMasses": 1.25
	  },
	  {
	    "catalogName": "Gamma Cephei",
	    "RAHours": 23,
	    "RAMinutes": 39.3,
	    "decHours": 77,
	    "decMinutes": 37,
	    "L": 119,
	    "B": 15.3,
	    "classification": "K1IV+M?",
	    "visMag": 3.21,
	    "absMag": 2.51,
	    "prllx": 72.5,
	    "dist": 44.99,
	    "glieseNumber": "Gl 903",
	    "properName": "Errai",
	    "solarMasses": 1.4
	  },
	  {
	    "catalogName": "Tau¹ Eridani",
	    "RAHours": 2,
	    "RAMinutes": 45.1,
	    "decHours": -18,
	    "decMinutes": 34,
	    "L": 200.8,
	    "B": -62.5,
	    "classification": "F6V",
	    "visMag": 4.47,
	    "absMag": 3.74,
	    "prllx": 71.56,
	    "dist": 45.58,
	    "glieseNumber": "Gl 111",
	    "properName": 0,
	    "solarMasses": 1.25
	  },
	  {
	    "catalogName": "18 Scorpii",
	    "RAHours": 16,
	    "RAMinutes": 15.6,
	    "decHours": -8,
	    "decMinutes": 22,
	    "L": 4.7,
	    "B": 29.2,
	    "classification": "G1V",
	    "visMag": 5.49,
	    "absMag": 4.76,
	    "prllx": 71.3,
	    "dist": 45.74,
	    "glieseNumber": "Gl 616",
	    "properName": 0,
	    "solarMasses": 1.02
	  },
	  {
	    "catalogName": "47 Ursae Majoris",
	    "RAHours": 10,
	    "RAMinutes": 59.5,
	    "decHours": 40,
	    "decMinutes": 25,
	    "L": 175.8,
	    "B": 63.4,
	    "classification": "G0V",
	    "visMag": 5.03,
	    "absMag": 4.29,
	    "prllx": 71.04,
	    "dist": 45.91,
	    "glieseNumber": "Gl 407",
	    "properName": 0,
	    "solarMasses": 1.08
	  },
	  {
	    "catalogName": "26 Draconis",
	    "RAHours": 17,
	    "RAMinutes": 35,
	    "decHours": 61,
	    "decMinutes": 52,
	    "L": 91,
	    "B": 32.7,
	    "classification": "G1V+K3V+M1V",
	    "visMag": 5.23,
	    "absMag": 4.49,
	    "prllx": 70.98,
	    "dist": 45.95,
	    "glieseNumber": "Gl 684",
	    "properName": 0,
	    "solarMasses": 1.3
	  },
	  {
	    "catalogName": "Alpha Fornacis",
	    "RAHours": 3,
	    "RAMinutes": 12.1,
	    "decHours": -28,
	    "decMinutes": 59,
	    "L": 224.7,
	    "B": -59,
	    "classification": "F7IV+G7V",
	    "visMag": 3.8,
	    "absMag": 3.05,
	    "prllx": 70.86,
	    "dist": 46.03,
	    "glieseNumber": "Gl 127",
	    "properName": "Fornacis",
	    "solarMasses": 1.33
	  },
	  {
	    "catalogName": "HR7578",
	    "RAHours": 19,
	    "RAMinutes": 54.3,
	    "decHours": -23,
	    "decMinutes": 56,
	    "L": 17.2,
	    "B": -23.9,
	    "classification": "K3V",
	    "visMag": 6.22,
	    "absMag": 5.46,
	    "prllx": 70.34,
	    "dist": 46.37,
	    "glieseNumber": "Gl 770",
	    "properName": 0,
	    "solarMasses": 0.85
	  },
	  {
	    "catalogName": "Pi¹ Ursae Majoris",
	    "RAHours": 8,
	    "RAMinutes": 39.2,
	    "decHours": 65,
	    "decMinutes": 1,
	    "L": 150.6,
	    "B": 35.7,
	    "classification": "G1V",
	    "visMag": 5.63,
	    "absMag": 4.86,
	    "prllx": 70.07,
	    "dist": 46.55,
	    "glieseNumber": "Gl 311",
	    "properName": 0,
	    "solarMasses": 0.9
	  },
	  {
	    "catalogName": "Alpha Ophiuchi",
	    "RAHours": 17,
	    "RAMinutes": 34.9,
	    "decHours": 12,
	    "decMinutes": 33,
	    "L": 35.9,
	    "B": 22.6,
	    "classification": "A5III-IV",
	    "visMag": 2.08,
	    "absMag": 1.3,
	    "prllx": 69.84,
	    "dist": 46.7,
	    "glieseNumber": "Gl 681",
	    "properName": "Rasalhague",
	    "solarMasses": 2.4
	  },
	  {
	    "catalogName": "Eta Cephei",
	    "RAHours": 20,
	    "RAMinutes": 45.3,
	    "decHours": 61,
	    "decMinutes": 50,
	    "L": 97.9,
	    "B": 11.6,
	    "classification": "K0IV",
	    "visMag": 3.41,
	    "absMag": 2.63,
	    "prllx": 69.73,
	    "dist": 46.77,
	    "glieseNumber": "Gl 807",
	    "properName": 0,
	    "solarMasses": 1.6
	  },
	  {
	    "catalogName": "72 Herculis",
	    "RAHours": 17,
	    "RAMinutes": 20.7,
	    "decHours": 32,
	    "decMinutes": 28,
	    "L": 55.9,
	    "B": 32.3,
	    "classification": "G1V",
	    "visMag": 5.38,
	    "absMag": 4.59,
	    "prllx": 69.48,
	    "dist": 46.94,
	    "glieseNumber": "Gl 672",
	    "properName": 0,
	    "solarMasses": 0.91
	  },
	  {
	    "catalogName": "Nu² Lupi",
	    "RAHours": 15,
	    "RAMinutes": 21.8,
	    "decHours": -48,
	    "decMinutes": 19,
	    "L": 327.1,
	    "B": 7.4,
	    "classification": "G2V",
	    "visMag": 5.65,
	    "absMag": 4.83,
	    "prllx": 68.7,
	    "dist": 47.48,
	    "glieseNumber": "Gl 582",
	    "properName": 0,
	    "solarMasses": 0.91
	  },
	  {
	    "catalogName": "Theta Boötis",
	    "RAHours": 14,
	    "RAMinutes": 25.2,
	    "decHours": 51,
	    "decMinutes": 51,
	    "L": 93.8,
	    "B": 59.7,
	    "classification": "F7V+M3V",
	    "visMag": 4.04,
	    "absMag": 3.22,
	    "prllx": 68.63,
	    "dist": 47.52,
	    "glieseNumber": "Gl 549",
	    "properName": "Asellus Primus",
	    "solarMasses": 1.3
	  },
	  {
	    "catalogName": "Iota Ursae Majoris",
	    "RAHours": 8,
	    "RAMinutes": 59.2,
	    "decHours": 48,
	    "decMinutes": 2,
	    "L": 171.5,
	    "B": 40.8,
	    "classification": "A7V+M1V+M?",
	    "visMag": 3.12,
	    "absMag": 2.29,
	    "prllx": 68.32,
	    "dist": 47.74,
	    "glieseNumber": "Gl 331",
	    "properName": "Talita",
	    "solarMasses": 1.7
	  },
	  {
	    "catalogName": "HR7898",
	    "RAHours": 20,
	    "RAMinutes": 40.2,
	    "decHours": -23,
	    "decMinutes": 46,
	    "L": 21.3,
	    "B": -33.8,
	    "classification": "G8V",
	    "visMag": 6.36,
	    "absMag": 5.53,
	    "prllx": 68.28,
	    "dist": 47.77,
	    "glieseNumber": "Gl 796",
	    "properName": 0,
	    "solarMasses": 0.81
	  },
	  {
	    "catalogName": "111 Tauri",
	    "RAHours": 5,
	    "RAMinutes": 24.4,
	    "decHours": 17,
	    "decMinutes": 23,
	    "L": 187.2,
	    "B": -10.3,
	    "classification": "F8V+K4V+K5V",
	    "visMag": 5,
	    "absMag": 4.17,
	    "prllx": 68.19,
	    "dist": 47.83,
	    "glieseNumber": "Gl 202",
	    "properName": 0,
	    "solarMasses": 1.08
	  },
	  {
	    "catalogName": "Psi Serpentis",
	    "RAHours": 15,
	    "RAMinutes": 44,
	    "decHours": 2,
	    "decMinutes": 30,
	    "L": 9.7,
	    "B": 42,
	    "classification": "G5V+M?",
	    "visMag": 5.86,
	    "absMag": 5.03,
	    "prllx": 68.16,
	    "dist": 47.85,
	    "glieseNumber": "Gl 596",
	    "properName": 0,
	    "solarMasses": 1.28
	  },
	  {
	    "catalogName": "Psi Capricorni",
	    "RAHours": 20,
	    "RAMinutes": 46.1,
	    "decHours": -25,
	    "decMinutes": 16,
	    "L": 20,
	    "B": -35.5,
	    "classification": "F5V",
	    "visMag": 4.13,
	    "absMag": 3.3,
	    "prllx": 68.16,
	    "dist": 47.85,
	    "glieseNumber": "Gl 805",
	    "properName": 0,
	    "solarMasses": 1.5
	  },
	  {
	    "catalogName": "Alpha Corvi",
	    "RAHours": 12,
	    "RAMinutes": 8.4,
	    "decHours": -24,
	    "decMinutes": 43,
	    "L": 290.6,
	    "B": 37.1,
	    "classification": "F2V",
	    "visMag": 4.02,
	    "absMag": 3.17,
	    "prllx": 67.71,
	    "dist": 48.17,
	    "glieseNumber": "Gl 455",
	    "properName": "Alchibah",
	    "solarMasses": 1.39
	  },
	  {
	    "catalogName": "I Hydrae",
	    "RAHours": 9,
	    "RAMinutes": 42.2,
	    "decHours": -23,
	    "decMinutes": 54,
	    "L": 256.7,
	    "B": 21.5,
	    "classification": "G0V",
	    "visMag": 4.93,
	    "absMag": 4.07,
	    "prllx": 67.19,
	    "dist": 48.54,
	    "glieseNumber": "Gl 364",
	    "properName": 0,
	    "solarMasses": 0.99
	  },
	  {
	    "catalogName": "20 Leonis Minoris",
	    "RAHours": 10,
	    "RAMinutes": 1,
	    "decHours": 31,
	    "decMinutes": 55,
	    "L": 195,
	    "B": 52.9,
	    "classification": "G2V",
	    "visMag": 5.37,
	    "absMag": 4.5,
	    "prllx": 67.14,
	    "dist": 48.58,
	    "glieseNumber": "Gl 376",
	    "properName": 0,
	    "solarMasses": 0.9
	  },
	  {
	    "catalogName": "HR209",
	    "RAHours": 0,
	    "RAMinutes": 45.8,
	    "decHours": -47,
	    "decMinutes": 33,
	    "L": 305.7,
	    "B": -69.6,
	    "classification": "G5V",
	    "visMag": 5.8,
	    "absMag": 4.93,
	    "prllx": 66.92,
	    "dist": 48.74,
	    "glieseNumber": "GJ 1021",
	    "properName": 0,
	    "solarMasses": 1.22
	  },
	  {
	    "catalogName": "Alpha Cephei",
	    "RAHours": 21,
	    "RAMinutes": 18.6,
	    "decHours": 62,
	    "decMinutes": 35,
	    "L": 101,
	    "B": 9.2,
	    "classification": "A7IV-V",
	    "visMag": 2.45,
	    "absMag": 1.58,
	    "prllx": 66.84,
	    "dist": 48.8,
	    "glieseNumber": "Gl 826",
	    "properName": "Alderamin",
	    "solarMasses": 1.74
	  },
	  {
	    "catalogName": "HR7162",
	    "RAHours": 18,
	    "RAMinutes": 57,
	    "decHours": 32,
	    "decMinutes": 54,
	    "L": 63.4,
	    "B": 13.3,
	    "classification": "G0V+K1V",
	    "visMag": 5.2,
	    "absMag": 4.32,
	    "prllx": 66.76,
	    "dist": 48.86,
	    "glieseNumber": "Gl 738",
	    "properName": 0,
	    "solarMasses": 1.07
	  },
	  {
	    "catalogName": "Eta Leporis",
	    "RAHours": 5,
	    "RAMinutes": 56.4,
	    "decHours": -14,
	    "decMinutes": 10,
	    "L": 219.8,
	    "B": -18.5,
	    "classification": "F0V",
	    "visMag": 3.71,
	    "absMag": 2.82,
	    "prllx": 66.47,
	    "dist": 49.07,
	    "glieseNumber": "Gl 225",
	    "properName": 0,
	    "solarMasses": 1.42
	  },
	  {
	    "catalogName": "Nu Phoenicis",
	    "RAHours": 1,
	    "RAMinutes": 15.2,
	    "decHours": -45,
	    "decMinutes": 31,
	    "L": 290.1,
	    "B": -71,
	    "classification": "F8V",
	    "visMag": 4.97,
	    "absMag": 4.08,
	    "prllx": 66.43,
	    "dist": 49.1,
	    "glieseNumber": "Gl  55",
	    "properName": 0,
	    "solarMasses": 1.2
	  },
	  {
	    "catalogName": "19 Draconis",
	    "RAHours": 16,
	    "RAMinutes": 56,
	    "decHours": 65,
	    "decMinutes": 8,
	    "L": 95.7,
	    "B": 36.5,
	    "classification": "F6V",
	    "visMag": 4.88,
	    "absMag": 3.99,
	    "prllx": 66.28,
	    "dist": 49.21,
	    "glieseNumber": "Gl 648",
	    "properName": 0,
	    "solarMasses": 1.1
	  },
	  {
	    "catalogName": "31 Aquilae",
	    "RAHours": 19,
	    "RAMinutes": 25,
	    "decHours": 11,
	    "decMinutes": 56,
	    "L": 47.4,
	    "B": -1.9,
	    "classification": "G8IV",
	    "visMag": 5.17,
	    "absMag": 4.27,
	    "prllx": 66.01,
	    "dist": 49.41,
	    "glieseNumber": "Gl 759",
	    "properName": 0,
	    "solarMasses": 1.16
	  },
	  {
	    "catalogName": "HR3018",
	    "RAHours": 7,
	    "RAMinutes": 45.6,
	    "decHours": -34,
	    "decMinutes": 10,
	    "L": 249.1,
	    "B": -4.8,
	    "classification": "G0V+DC",
	    "visMag": 5.36,
	    "absMag": 4.45,
	    "prllx": 65.79,
	    "dist": 49.58,
	    "glieseNumber": "Gl 288",
	    "properName": 0,
	    "solarMasses": 1
	  },
	  {
	    "catalogName": "HR5864",
	    "RAHours": 15,
	    "RAMinutes": 47.5,
	    "decHours": -37,
	    "decMinutes": 54,
	    "L": 337.2,
	    "B": 13,
	    "classification": "G6V+DA7",
	    "visMag": 6.01,
	    "absMag": 5.09,
	    "prllx": 65.6,
	    "dist": 49.72,
	    "glieseNumber": "Gl 599",
	    "properName": 0,
	    "solarMasses": 1.1
	  },
	  {
	    "catalogName": "Mu Arae",
	    "RAHours": 17,
	    "RAMinutes": 44.1,
	    "decHours": -51,
	    "decMinutes": 50,
	    "L": 340.1,
	    "B": -11.5,
	    "classification": "G5V",
	    "visMag": 5.12,
	    "absMag": 4.23,
	    "prllx": 65.46,
	    "dist": 49.83,
	    "glieseNumber": "Gl 691",
	    "properName": 0,
	    "solarMasses": 1.1
	  }
	]

	var scene = new THREE.Scene();
	var renderer 
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)
	var controls = new THREE.OrbitControls( camera, document.getElementById('canvas') );

	renderer = new THREE.WebGLRenderer()
	renderer.setSize( window.innerWidth*.66, window.innerHeight*.66 )
	document.getElementById('canvas').appendChild(renderer.domElement)
	var scaleFactor = (window.innerWidth / window.innerHeight) * 2

	camera.position.z = 400

	var starObjects = []

	var starColors = {
		O: 0x0099FF,
		B: 0x0099FF,
		A: 0x0099FF,
		F: 0x33FFFF,
		G: 0xFFFF00,
		K: 0xFF9900,
		M: 0xFF6699
	}

	var starRanges = {
		xMin: 0,
		xMax: 0,
		yMin: 0,
		yMax: 0,
		zMin: 0,
		zMax: 0
	}

	$scope.calculateCanvas = function () {

		KC = $scope.kelseyConstant * 1e14

		for (var i = scene.children.length - 1; i >= 0; i--) {
		    let child = scene.children[i];

		    if ( child.type !== 'plane' && child.type !== 'camera' ) { // plane & camera are stored earlier
		      scene.remove(child);
		    }
		 }

		starObjects = []

		//Create star objects and calcuate ranges from stars array
		for (var i = stars.length - 1; i >= 0; i--) {

			var pos = calculatePosition(stars[i])
			addStar(pos.x, pos.y, pos.z, starColors[stars[i].classification.slice(0,1)])
			calculateRanges(pos.x, pos.y, pos.z)

			var kelseyRadius = calculateKelseyRadius(stars[i].solarMasses)

			var neighbors = []

			for (var j = stars.length - 1; j >= 0; j--) {
				if (measureDistances(stars[i], stars[j]) < kelseyRadius && i !== j) {
					neighbors.push(stars[j])
				}
			}

			for (var k = neighbors.length - 1; k >= 0; k--) {
				addVector(stars[i], calculateJumpVector(stars[i], neighbors[k]), measureDistances(stars[i], neighbors[k]))
			}

			if ($scope.starNames) {
				addText(stars[i])
			}

		}

		//Create ring planes along x axis

		for (var i = 50; i >= 5; i -= (50/10) ) {

			var j = i

			var geometry = new THREE.RingGeometry(i*scaleFactor, ((i*scaleFactor)+ 1), 32)
			var material = new THREE.MeshBasicMaterial({
				color: 0x0000FF,
				side: THREE.DoubleSide
			})
			var mesh = new THREE.Mesh( geometry, material )
			mesh.rotation.x = (Math.PI/2)
			scene.add( mesh )

			var closure = function (j) {

				var loader = new THREE.FontLoader()

				loader.load( '/three/examples/fonts/helvetiker_bold.typeface.json', function ( font ) { 

					var geometry = new THREE.TextGeometry(`${j} Ly`, {
						font: font, 
						height: 1,
						size: 2
					})
					var material = new THREE.MeshBasicMaterial({ 
						color: 0x00AAAF
					})
					var text = new THREE.Mesh( geometry, material )
					text.position.set(j*scaleFactor, 1, 0)
					scene.add( text )

				})

			}(i)

			

		}

		//Loop through star objects to add to scene as well as manipulation
		for (var i = starObjects.length - 1; i >= 0; i--) {
			scene.add(starObjects[i])
		}

		animate()
		
	}


	function calculatePosition(star) {

		var a = (star.RAHours * 15) + (star.RAMinutes * 0.25)
		var b = (Math.abs(star.decHours) + (star.decMinutes/60)) * (star.decHours > 0 ? 1 : -1)
		var c = star.dist

		var position = {
			x: c * Math.cos(b) * Math.cos(a) * scaleFactor,
			y: c * Math.sin(a) * Math.cos(b) * scaleFactor,
			z: c * Math.sin(b) * scaleFactor
		}

		return position

	}

	function addStar(x, y, z, color) {
		var geometry = new THREE.SphereGeometry( 2, 16, 16)
		var material = new THREE.MeshBasicMaterial({ 
			color: color,
			wireframe: true,
			wireframeLinecap: 'butt'
		})
		var sphere = new THREE.Mesh( geometry, material )
		sphere.position.set(x, y, z)
		starObjects.push(sphere)
	}

	function calculateRanges(x, y, z) {
		if (x < starRanges.xMin) {
			starRanges.xMin = x
		} else if (x > starRanges.xMax) {
			starRanges.xMax = x
		}

		if (y < starRanges.yMin) {
			starRanges.yMin = y
		} else if (y > starRanges.yMax) {
			starRanges.yMax = y
		}

		if (z < starRanges.zMin) {
			starRanges.zMin = z
		} else if (z > starRanges.zMax) {
			starRanges.zMax = z
		}
	}

	function calculateKelseyRadius(mass) {

		var radius

		if (mass >= 1.66) {
			radius = 1.33*(Math.pow(mass, 0.945)) * solarRadius
		} else {
			radius = 1.06*(Math.pow(mass, 0.555)) * solarRadius
		}

		return (((KC * gravitationalConstant * mass * solarMass) / Math.pow(radius, 2)) / lightYear) * scaleFactor

	}

	function measureDistances(starA, starB) {

		var posA = calculatePosition(starA)
		var posB = calculatePosition(starB)

		var deltaX = posA.x - posB.x
		var deltaY = posA.y - posB.y
		var deltaZ = posA.z - posB.z

		var distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2) + Math.pow(deltaZ, 2))

		return distance

	}

	function calculateJumpVector (starA, starB) {

		var posA = calculatePosition(starA)
		var posB = calculatePosition(starB)

		var vector = {
			x: (posB.x - posA.x),
			y: (posB.y - posA.y),
			z: (posB.z - posA.z)
		}

		return vector

	}

	function addVector (originStar, vector, distance) {

		var posO = calculatePosition(originStar)
		var dir = new THREE.Vector3( vector.x/distance, vector.y/distance, vector.z/distance );
		var origin = new THREE.Vector3( posO.x, posO.y, posO.z );
		var length = distance;
		var hex = 0xB0F538;

		var arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
		scene.add( arrowHelper );

	}


	function addText (star) {

		var pos = calculatePosition(star)
		pos.y += 3		

		var loader = new THREE.FontLoader()

		loader.load( '/three/examples/fonts/helvetiker_bold.typeface.json', function ( font ) { 
 
			var geometry = new THREE.TextGeometry((!!star.properName ? star.properName : star.catalogName), {
				font: font, 
				height: 1,
				size: 2
			})
			var material = new THREE.MeshBasicMaterial({ 
				color: starColors[star.classification.slice(0,1)]
			})
			var text = new THREE.Mesh( geometry, material )
			text.position.set(pos.x, pos.y, pos.z)
			scene.add( text )

		})

	}

	function animate() {
	  requestAnimationFrame( animate );
	  render();
	  controls.update();
	}

	function render() {
	  renderer.render( scene, camera );
	}

	$scope.calculateCanvas()

});