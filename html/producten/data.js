var bandentypes =   [
                        ["Personenauto (C1)", "c1"], 
                        ["Bestelwagen (C2)", "c2"], 
                        ["Vrachtwagen / bus (C3)", "c3"]
                    ]; 
                    
var brandstofefficientieklassen = 
                    [
                        ["A", "A", "C1"], 
                        ["B", "B", "C1"], 
                        ["C", "C", "C1"], 
                        ["E", "E", "C1"], 
                        ["F", "F", "C1"], 
                        ["G", "G", "C1"],
                        ["A", "A", "C2"], 
                        ["B", "B", "C2"], 
                        ["C", "C", "C2"], 
                        ["E", "E", "C2"], 
                        ["F", "F", "C2"], 
                        ["G", "G", "C2"],
                        ["A", "A", "C3"], 
                        ["B", "B", "C3"], 
                        ["C", "C", "C3"], 
                        ["D", "D", "C3"], 
                        ["E", "E", "C3"], 
                        ["F", "F", "C3"]
                    ]; 

var brandstoftypes = 
                    [
                        ["Diesel", "diesel"], 
                        ["Benzine", "benzine"], 
                        ["LPG", "lpg"]
                    ]; 

var rijkenmerken_verdeling = 
                    [
                        ["Stedelijk", 40], 
                        ["Snelweg", 60]
                    ];

var rijkenmerken = 
                    [
                        ["Stedelijk", "Increase", "C1", 1.04], 
                        ["Stedelijk", "Increase", "C2", 0.98], 
                        ["Stedelijk", "Increase", "C3", 0.95],
                        ["Snelweg", "Increase", "C1", 1.15],
                        ["Snelweg", "Increase", "C2", 1.18], 
                        ["Snelweg", "Increase", "C3", 1.15],
                        ["Stedelijk", "Decrease", "C1", 1.45], 
                        ["Stedelijk", "Decrease", "C2", 1.09], 
                        ["Stedelijk", "Decrease", "C3", 1.06],
                        ["Snelweg", "Decrease", "C1", 1.83], 
                        ["Snelweg", "Decrease", "C2", 1.25], 
                        ["Snelweg", "Decrease", "C3", 1.18]
                    ];

var relatie_verbruik_emissie = 
                    [
                        ["diesel", 2.652], 
                        ["benzine", 2.337], 
                        ["lpg", 1.646]
                    ];

var brandstofverbruik = 
                    [
                        ["C1", "A", 6.5],                    
                        ["C2", "A", 5.5],
                        ["C3", "A", 4.0],
                        ["C1", "B", 7.15],                    
                        ["C2", "B", 6.15],
                        ["C3", "B", 4.55],
                        ["C1", "C", 8.4],                    
                        ["C2", "C", 7.4],
                        ["C3", "C", 5.55],
                        ["C1", "D", -1],                    
                        ["C2", "D", -1],
                        ["C3", "D", 6.55],
                        ["C1", "E", 9.8],                    
                        ["C2", "E", 8.65],
                        ["C3", "E", 7.55],
                        ["C1", "F", 11.3],                    
                        ["C2", "F", 9.9],
                        ["C3", "F", 8.1],
                        ["C1", "G", 12.1],                    
                        ["C2", "G", 10.6],
                        ["C3", "G", -1]
                    ];


var percentages = 
                    [
                        ["0%", 0],                    
                        ["10%", 10],                    
                        ["20%", 20],                    
                        ["30%", 30],                    
                        ["40%", 40],                    
                        ["50%", 50],                    
                        ["60%", 60],                    
                        ["70%", 70],                    
                        ["80%", 80],                    
                        ["90%", 90],                    
                        ["100%", 100]                    
                    ];























