// De webpagina vullen bij het opstarten
function Opstarten()
{
    for (var k = 0; k < bandentypes.length; k++)
    {
        var bandentype_code = bandentypes[k][1];
        
        // Keuzelijsten brandstofefficientieklasse
        for (var i = 0; i < brandstofefficientieklassen.length; i++) 
        {
                var brandstofefficientieklasse_omschrijving = brandstofefficientieklassen[i][0];
                var brandstofefficientieklasse_code = brandstofefficientieklassen[i][1];
                var brandstofefficientieklasse_bandentype = brandstofefficientieklassen[i][2];
                
                if (brandstofefficientieklasse_bandentype == bandentype_code.toUpperCase())
                {
                    $('#' + bandentype_code + '_keuzelijst_brandstofefficientieklasse_huidig').append('<option value="' + brandstofefficientieklasse_code + '">' + brandstofefficientieklasse_omschrijving + '</option>');
                    $('#' + bandentype_code + '_keuzelijst_brandstofefficientieklasse_nieuw').append('<option value="' + brandstofefficientieklasse_code + '">' + brandstofefficientieklasse_omschrijving + '</option>');
                }
        }
        
        // Keuzelijst percentages
        for (var i = 0; i < percentages.length; i++) 
        {
                var percentage_omschrijving = percentages[i][0];
                var percentage_code = percentages[i][1];
                
                $('#' + bandentype_code + '_keuzelijst_percentage_stad').append('<option value="' + percentage_code + '">' + percentage_omschrijving + '</option>');
        }

        // Keuzelijst brandstoftypes
        for (var i = 0; i < brandstoftypes.length; i++) 
        {
                var brandstoftype_omschrijving = brandstoftypes[i][0];
                var brandstoftype_code = brandstoftypes[i][1];
                
                $('#' + bandentype_code + '_keuzelijst_brandstof').append('<option value="' + brandstoftype_code + '">' + brandstoftype_omschrijving + '</option>');
        }
    }
    
    // Tenslotte de boel effe doorrekenen
    Doorrekenen();
    
}

// Alle opties van een dropdown (select) verwijderen
function removeOptions(selectbox)
{
    for (var i = selectbox.options.length - 1 ; i >= 0 ; i--)
    {
        selectbox.remove(i);
    }
}

// Communicerende velden
function Synchroniseren()
{
    for (var k = 0; k < bandentypes.length; k++)
    {
        var bandentype_code = bandentypes[k][1];
        
        // Invoer uitlezen
        var input_brandstofefficientieklasse_huidig = $('#' + bandentype_code + '_keuzelijst_brandstofefficientieklasse_huidig').val();
        var input_brandstofefficientieklasse_nieuw = $('#' + bandentype_code + '_keuzelijst_brandstofefficientieklasse_nieuw').val();

        removeOptions(document.getElementById(bandentype_code + '_keuzelijst_brandstofefficientieklasse_huidig'));
        removeOptions(document.getElementById(bandentype_code + '_keuzelijst_brandstofefficientieklasse_nieuw'));

        for (var i = 0; i < brandstofefficientieklassen.length; i++) 
        {
                var brandstofefficientieklasse_omschrijving = brandstofefficientieklassen[i][0];
                var brandstofefficientieklasse_code = brandstofefficientieklassen[i][1];
                var brandstofefficientieklasse_bandentype = brandstofefficientieklassen[i][2];
                
                if (brandstofefficientieklasse_bandentype == bandentype_code.toUpperCase())
                {
                    $('#' + bandentype_code + '_keuzelijst_brandstofefficientieklasse_huidig').append('<option value="' + brandstofefficientieklasse_code + '">' + brandstofefficientieklasse_omschrijving + '</option>');
                    $('#' + bandentype_code + '_keuzelijst_brandstofefficientieklasse_nieuw').append('<option value="' + brandstofefficientieklasse_code + '">' + brandstofefficientieklasse_omschrijving + '</option>');
                }
        } 
        
        // Oude waarden terugzetten
        $('#' + bandentype_code + '_keuzelijst_brandstofefficientieklasse_huidig').val(input_brandstofefficientieklasse_huidig);
        $('#' + bandentype_code + '_keuzelijst_brandstofefficientieklasse_nieuw').val(input_brandstofefficientieklasse_nieuw);
    }
}

// De webpagina doorrekenen
function Doorrekenen()
{
    // Per categorie
    for (var k = 0; k < bandentypes.length; k++)
    {
        var bandentype_code = bandentypes[k][1];
        
        // Invoer uitlezen
        var input_aantal_voertuigen = $('#' + bandentype_code + '_aantal_voertuigen').val();
        var input_brandstofefficientieklasse_huidig = $('#' + bandentype_code + '_keuzelijst_brandstofefficientieklasse_huidig').val();
        var input_brandstofefficientieklasse_nieuw = $('#' + bandentype_code + '_keuzelijst_brandstofefficientieklasse_nieuw').val();
        var input_percentage_stedelijk = $('#' + bandentype_code + '_keuzelijst_percentage_stad').val();
        var input_aantal_kms = $('#' + bandentype_code + '_aantal_kms').val();
        var input_brandstofverbruik_huidig = $('#' + bandentype_code + '_brandstofverbruik_huidig').val();
        var input_brandstof = $('#' + bandentype_code + '_keuzelijst_brandstof').val();
        var input_brandstofprijs = $('#' + bandentype_code + '_brandstofprijs').val();

        // Check negatieve waarden
        if (input_aantal_voertuigen < 0)
        {
            alert('U kunt geen negatieve waarden invoeren bij "Aantal voertuigen".');
            $('#' + bandentype_code + '_aantal_voertuigen').val(0);
            break;
        }
        
        if (input_aantal_kms < 0)
        {
            alert('U kunt geen negatieve waarden invoeren bij "Verwacht aantal km\'s".');
            $('#' + bandentype_code + '_aantal_kms').val(0);
            break;
        }
        
        if (input_brandstofverbruik_huidig < 0)
        {
            alert('U kunt geen negatieve waarden invoeren bij "Gemiddeld brandstofverbruik".');
            $('#' + bandentype_code + '_brandstofverbruik_huidig').val(0);
            break;
        }
        
        if (input_brandstofprijs < 0)
        {
            alert('U kunt geen negatieve waarden invoeren bij "Brandstofprijs".');
            $('#' + bandentype_code + '_brandstofprijs').val(0);
            break;
        }
        
        
        // Effe wat vertalen
        var rijkenmerken_verdeling_stedelijk = input_percentage_stedelijk;
        var rijkenmerken_verdeling_snelweg = 100 - input_percentage_stedelijk;

        var input_rijkenmerken_soort = "<onbekend>";
        
        if (input_brandstofefficientieklasse_huidig <= input_brandstofefficientieklasse_nieuw)
        {
            input_rijkenmerken_soort = "Increase";
        }
        else
        {
            input_rijkenmerken_soort = "Decrease";
        }
        
        
        // K Stedelijk, snelweg en gemiddeld
        var k_stedelijk_factor = -1;
        var k_snelweg_factor = -1;
        var k_gemiddeld_factor = -1;
            
        for (var i = 0; i < rijkenmerken.length; i++)
        {
            var rijkenmerken_omgeving = rijkenmerken[i][0];
            var rijkenmerken_soort = rijkenmerken[i][1];
            var rijkenmerken_bandentype = rijkenmerken[i][2];
            var rijkenmerken_factor = rijkenmerken[i][3];
            
            if (rijkenmerken_omgeving == "Stedelijk" && rijkenmerken_soort == input_rijkenmerken_soort && rijkenmerken_bandentype == bandentype_code.toUpperCase())
            {
                k_stedelijk_factor = rijkenmerken_factor / 10;
            }

            if (rijkenmerken_omgeving == "Snelweg" && rijkenmerken_soort == input_rijkenmerken_soort && rijkenmerken_bandentype == bandentype_code.toUpperCase())
            {
                k_snelweg_factor = rijkenmerken_factor / 10;
            }
        }
        
        if (k_stedelijk_factor > -1 && k_snelweg_factor > -1)
        {
            k_gemiddeld_factor = (k_stedelijk_factor * (rijkenmerken_verdeling_stedelijk / 100)) + (k_snelweg_factor * (rijkenmerken_verdeling_snelweg / 100));
        }
        
        $('#' + bandentype_code + '_k_stedelijk').val(k_stedelijk_factor.toFixed(4));
        $('#' + bandentype_code + '_k_snelweg').val(k_snelweg_factor.toFixed(4));
        $('#' + bandentype_code + '_k_gemiddeld').val(k_gemiddeld_factor.toFixed(4));
        
        // Relatie verbruik-emissie
        var relatie_verbruik_emissie_factor = -1;
        
        for (var i = 0; i < relatie_verbruik_emissie.length; i++)
        {
            var relatie_verbruik_emissie_brandstoftype = relatie_verbruik_emissie[i][0];
            var relatie_verbruik_emissie_waarde = relatie_verbruik_emissie[i][1];

            if (relatie_verbruik_emissie_brandstoftype == input_brandstof)
            {
                relatie_verbruik_emissie_factor = relatie_verbruik_emissie_waarde;
                break;
            }
        }
        
        if (relatie_verbruik_emissie_factor == -1)
        {
            $('#' + bandentype_code + '_relatie_verbruik_emissie').val('<onbekend>');        
        }
        else
        {
            $('#' + bandentype_code + '_relatie_verbruik_emissie').val(relatie_verbruik_emissie_factor.toFixed(4));                
        }
        
        // Percentage brandstofreductie
        var brandstofverbruik_huidig = -1;
        var brandstofverbruik_nieuw = -1;
        var brandstofreductie = -1;
        
        for (var i = 0; i < brandstofverbruik.length; i++)
        {
            var brandstofverbruik_bandentype = brandstofverbruik[i][0];
            var brandstofverbruik_brandstofefficientieklasse = brandstofverbruik[i][1];
            var brandstofverbruik_waarde = brandstofverbruik[i][2];
            
            if (brandstofverbruik_bandentype == bandentype_code.toUpperCase() && brandstofverbruik_brandstofefficientieklasse == input_brandstofefficientieklasse_huidig)
            {
                brandstofverbruik_huidig = brandstofverbruik_waarde;
            }

            if (brandstofverbruik_bandentype == bandentype_code.toUpperCase() && brandstofverbruik_brandstofefficientieklasse == input_brandstofefficientieklasse_nieuw)
            {
                brandstofverbruik_nieuw = brandstofverbruik_waarde;
            }
        }

        if (brandstofverbruik_huidig > -1 && brandstofverbruik_nieuw > -1)
        {    
            k_gemiddeld = $('#' + bandentype_code + '_k_gemiddeld').val();
            brandstofreductie = (k_gemiddeld * 100 * (brandstofverbruik_huidig - brandstofverbruik_nieuw)) / brandstofverbruik_huidig
            $('#' + bandentype_code + '_brandstofreductie').val(brandstofreductie.toFixed(1));                
        }
        else
        {
            $('#' + bandentype_code + '_brandstofreductie').val('<onbekend>');        
        }
        
        // Gemiddeld brandstofverbruik met nieuwe banden
        var brandstofverbruik_nieuw = input_brandstofverbruik_huidig * (1 - (brandstofreductie / 100));
        $('#' + bandentype_code + '_brandstofverbruik_nieuw').val(brandstofverbruik_nieuw.toFixed(1));

        // Kostenbesparing
        var kostenbesparing = (-1 * input_aantal_kms) * (brandstofverbruik_nieuw - input_brandstofverbruik_huidig) * (input_brandstofprijs / 100);
        $('#' + bandentype_code + '_kostenbesparing_categorie').val((Math.round(kostenbesparing / 10) * 10)  * input_aantal_voertuigen);
        
        // Brandstofbesparing
        var brandstofbesparing = (-1 * (brandstofverbruik_nieuw - input_brandstofverbruik_huidig)) * (input_aantal_kms / 100);
        $('#' + bandentype_code + '_brandstofbesparing_categorie').val((Math.round(brandstofbesparing / 10) * 10) * input_aantal_voertuigen);
        
        // Vermindering van CO2-uitstoot
        var vermindering_co2 = (-1 * relatie_verbruik_emissie_factor) * (brandstofverbruik_nieuw - input_brandstofverbruik_huidig) * (input_aantal_kms / 100);
        $('#' + bandentype_code + '_vermindering_co2_categorie').val((Math.round(vermindering_co2 / 10) * 10) * input_aantal_voertuigen);
    }
    
    // Totaal
    var kostenbesparing_totaal = 0;
    var brandstofbesparing_totaal = 0;
    var vermindering_co2_totaal = 0;
    
    for (var k = 0; k < bandentypes.length; k++)
    {
        var bandentype_code = bandentypes[k][1];
        var kostenbesparing = $('#' + bandentype_code + '_kostenbesparing_categorie').val();
        var brandstofbesparing = $('#' + bandentype_code + '_brandstofbesparing_categorie').val();
        var vermindering_co2 = $('#' + bandentype_code + '_vermindering_co2_categorie').val();
        
        kostenbesparing_totaal = kostenbesparing_totaal + parseInt(kostenbesparing);
        brandstofbesparing_totaal = brandstofbesparing_totaal + parseInt(brandstofbesparing);
        vermindering_co2_totaal = vermindering_co2_totaal + parseInt(vermindering_co2);
    }
    
    $('#kostenbesparing_totaal').val(kostenbesparing_totaal);
    $('#brandstofbesparing_totaal').val(brandstofbesparing_totaal);
    $('#vermindering_co2_totaal').val(vermindering_co2_totaal);
}













