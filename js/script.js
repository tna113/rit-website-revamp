$(document).ready(function() {
    /*     _                 _   
      __ _| |__   ___  _   _| |_ 
     / _` | '_ \ / _ \| | | | __|
    | (_| | |_) | (_) | |_| | |_ 
     \__,_|_.__/ \___/ \__,_|\__| */
    //about: title, description, quote, quoteAuthor
    xhr('get', {
        path: '/about/'
    }, '#spinnerBox').done(function(json) {
        //console.log(json);
        $('#about').append('<h1>' + json.title + '</h1>');
        $('#about').append('<h3>' + json.description + '</h3>');
    });





    /*   _                               
      __| | ___  __ _ _ __ ___  ___  ___ 
     / _` |/ _ \/ _` | '__/ _ \/ _ \/ __|
    | (_| |  __/ (_| | | |  __/  __/\__ \
     \__,_|\___|\__, |_|  \___|\___||___/
                |___/                  */
    //undergraduate: degreeName, title, description, concentrations array
    xhr('get', { path: '/degrees/undergraduate' }, '#spinnerBox').done(function(json) {
        $.each(json.undergraduate, function(i, item) {
            $('#undergraduate').append('<div class="undergraduate_card"><h4>' + item.degreeName + '</h4><img src="./img/' + this.degreeName + '_white.png" class="icon"><div class="cap"><h5>' + this.title + '</h5><p>' + this.description + '</p></div></div>');
        });
    });

    //////graduate: degreeName, title, description, concentrations array
    xhr('get', { path: '/degrees/graduate' }, '#spinnerBox').done(function(json) {
        $.each(json.graduate, function(i, item) {
            if (i == 3) {
                $('#graduate').append('<div class="graduate_card xtra" ><h4>' + item.degreeName + '</h4><img src="./img/gac.png" class="icon"></div>');
            } else {
                $('#graduate').append('<div class="graduate_card"><h4>' + item.degreeName + '</h4><img src="./img/' + this.degreeName + '.png" class="icon"><div class="cap"><h5>' + this.title + '</h5><p>' + this.description + '</p></div></div>');
            }
        });
    });




    /*         _                      
     _ __ ___ (_)_ __   ___  _ __ ___ 
    | '_ ` _ \| | '_ \ / _ \| '__/ __|
    | | | | | | | | | | (_) | |  \__ \
    |_| |_| |_|_|_| |_|\___/|_|  |___/ */
    //minors: name, title, description, courses array, note
    xhr('get', { path: '/minors' }, '#spinnerBox').done(function(json) {
        $.each(json.UgMinors, function(i, item) {

            //create list string to append
            var liArr = '<ul><li style="text-decoration:underline; font-weight:bold; color: var(--green);">courses</li>';
            $.each(item.courses, function(i, item) {
                liArr += '<li>';
                liArr += item;
                liArr += '</li>';
            });
            liArr += '</ul>';

            //find out if theres a note or not
            var note = '';
            if (item.note != "") {
                note = '. <br><br>* ' + item.note;
            }

            $('#minors').append('<div><div class="main"><h1>' + item.name + '</h1><h3>' + item.title + '</h3></div><div class="cap"><p>' + item.description + note + '</p>' + liArr + '</div></div>');

            $('#minors .main').hover(function() {
                // console.log('mouseenter');
                //mouseenter
                $(this).addClass('hov');
                $(this).animate({
                    'font-size': '120%',
                    'letter-spacing': '0.3em'
                }, 75);
                $(this).next().slideDown();
            }, function() {
                // console.log('mosueleave');
                //mouseleave
                $(this).removeClass('hov');
                $(this).animate({
                    'font-size': '100%',
                    'letter-spacing': '0em'
                }, 75);
                $(this).next().slideUp();
            });
        });
    });





    /*___ ___  _   _ _ __ ___  ___ 
     / __/ _ \| | | | '__/ __|/ _ \
    | (_| (_) | |_| | |  \__ \  __/
     \___\___/ \__,_|_|  |___/\___|  */
    //course: 189 item array
    xhr('get', { path: '/courses' }, '#spinnerBox').done(function(json) {
        $.each(json, function(i, item) {

            //create list string to append
            var liArr = "";
            $.each(item.courses, function(i, item) {
                liArr += item;
                liArr += ', ';
            });


            $('#course').append('<div><div class="main"><h1>' + item.degreeName + '</h1><h3>&nbsp;</h3></div><div class="cap"><p>Semester: ' + item.semester + ', Courses: </p>' + liArr + '</div></div>');



            $('#course .main').hover(function() {
                // console.log('mouseenter');
                //mouseenter
                $(this).addClass('hov');
                $(this).animate({
                    'letter-spacing': '3em'
                }, 75);
            }, function() {
                // console.log('mosueleave');
                //mouseleave
                $(this).removeClass('hov');
                $(this).animate({
                    'letter-spacing': '0em'
                }, 75);
            });


            $('#course .main').click(function() {
                    // console.log('mouseenter');
                    //mouseenter
                    $(this).off('mouseleave');
                    $(this).addClass('hov');
                    $(this).animate({
                        'font-size': '110%',
                        'letter-spacing': '3em'
                    }, 200);
                    $(this).next().slideDown();
                }
                // , function() {
                //     // console.log('mosueleave');
                //     //mouseleave
                //     $(this).removeClass('hov');
                //     $(this).animate({
                //         'font-size': '100%',
                //         'letter-spacing': '0px'
                //     }, 100);
                //     $(this).next().slideUp();
                // }
            );
        });
    });





    /*___ ___         ___  _ __  
     / __/ _ \ _____ / _ \| '_ \ 
    | (_| (_) |_____| (_) | |_) |
     \___\___/       \___/| .__/ 
                          |_|    */
    //get coop: employment/coopTable: title, coopInformation array






    /*                      _      
     _ __   ___  ___  _ __ | | ___ 
    | '_ \ / _ \/ _ \| '_ \| |/ _ \
    | |_) |  __/ (_) | |_) | |  __/
    | .__/ \___|\___/| .__/|_|\___|
    |_|              |_|              */
    //get people: title, subtitle, faculty, staff
    //////get faculty: /people/faculty: username, name, tagline, imagePath, title, interestArea, office, website, phone, email, twitter, facebook
    xhr('get', { path: '/people/faculty' }, '#spinnerBox').done(function(json) {
        // console.log('json:' + json);
        $.each(json.faculty, function(i, item) {
            $('#faculty').append('<li><img src="' + item.imagePath + '" alt="A photograph of ' + item.name + ', ' + item.title + '"><div class="caption"><div class="blur"></div><div class="caption-text"><h3>' + item.name + '</h3><p><span class="caption-highlight">Title:</span> ' + item.title + '</p><p><span class="caption-highlight">Interest Area:</span> ' + item.interestArea + '</p><p><span class="caption-highlight">Office:</span> ' + item.office + '</p><p><span class="caption-highlight">Email:</span> ' + item.email + '</p></div></div></li>');
        });
    });

    //////get staff: /people/staff: username, name, tagline, imagePath, title, interestArea, office, website, phone, email, twitter, facebook
    xhr('get', { path: '/people/staff' }, '#spinnerBox').done(function(json) {
        // console.log('json:' + json.staff);

        //LATER: build image string with path to filter out people who have no picture and they can be put elsewhere

        $.each(json.staff, function(i, item) {
            $('#staff').append('<li><img src="' + item.imagePath + '" alt="A photograph of ' + item.name + ', ' + item.title + '"><div class="caption"><div class="blur"></div><div class="caption-text"><h3>' + item.name + '</h3><p><span class="caption-highlight">Title:</span> ' + item.title + '</p><p><span class="caption-highlight">Interest Area:</span> ' + item.interestArea + '</p><p><span class="caption-highlight">Email:</span> ' + item.email + '</p></div></div></li>');
        });
    });






    /*                  _                                  _   
    ___ _ __ ___  _ __ | | ___  _   _ _ __ ___   ___ _ __ | |_ 
     / _ \ '_ ` _ \| '_ \| |/ _ \| | | | '_ ` _ \ / _ \ '_ \| __|
    |  __/ | | | | | |_) | | (_) | |_| | | | | | |  __/ | | | |_ 
     \___|_| |_| |_| .__/|_|\___/ \__, |_| |_| |_|\___|_| |_|\__|
                   |_|            |___/                             */
    //get employment/employmentTable: title, professionalEmploymentInformation arary
    var empInfoArr = [];
    xhr('get', { path: '/employment/employmentTable' }, '#spinnerBox').done(function(json) {
        $.each(json, function(i, item) {
            $.each(this.professionalEmploymentInformation, function(i, item) {
                // $('#employment').append('<p style="color:red">' + this.title + '</p>');

                //'this' would be a professionalEmpInfo object
                //there are like 800+ of these things
                //set to a global variable so u can access for plugin2
                empInfoArr.push(this.title + ' at ' + this.employer);
                // console.log('[' + i + ']...' + this.title + 'at ' + this.employer);
            });
        });
    });

    //research?
    //news?
    //map?





    /*    _                   _           
    _ __ | |_   _  __ _      (_)_ __  ___ 
    | '_ \| | | | |/ _` |_____| | '_ \/ __|
    | |_) | | |_| | (_| |_____| | | | \__ \
    | .__/|_|\__,_|\__, |     |_|_| |_|___/
    |_|            |___/                   */
    //nav
    $(document).viewitle();

    //employment
    $(function() {
        $('blockquote span').billboard({ messages: empInfoArr })
    });

}); //end of document.ready






/*     _   _ _ _ _         
 _   _| |_(_) (_) |_ _   _ 
| | | | __| | | | __| | | |
| |_| | |_| | | | |_| |_| |
 \__,_|\__|_|_|_|\__|\__, |
                     |___/  
\\
//  args    getPost - is it a get or post?
\\          d - data
//          spinnerId - id of tag to put the spinner in
\\
//  ex: xhr('get', {path: '/about/'}, '#content').done()
\\  OR  xhr('get', {path: '/about/'}).done()
*/

function xhr(getPost, d, spinnerId) {
    return $.ajax({
        type: getPost,
        data: d,
        dataType: 'json',
        cache: false,
        async: true,
        url: 'proxy.php',
        beforeSend: function() {
            //make spinner
            $(spinnerId).append('<img src="./img/spinner.gif" class="spinner">');
        }
    }).always(function() {
        //kill spiinner
        $('.spinner').remove();
    }).fail(function(err) {
        console.log(err);
    }); //no .done bcos when we call xhr, we will put .done at the end of it
}