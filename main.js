//const { app, BrowserWindow } = require('electron')
//const bootstrapMaterial = require('bootstrap-material-design')
const domain = 'http://www.dnd5eapi.co/api/';
function createWindow () {
  // Create la finestra del browser
  win = new BrowserWindow({ width: 800, height: 600 })
  //
  //const $ = (require('jquery'))(dom.window);

  // e viene caricato il file index.html della nostra app.
  win.loadFile('index.html')
}


function myFunction(){
    //var content = jQuery('#interactive').val();
    var content = 'spells/1/';

    var call_url = 'http://www.dnd5eapi.co/api/' + content;
    
    jQuery.ajax({
        dataType: 'json',
        url: call_url,
        context: document.body,
        
        complete: (data) => {
            if (data['status'] == 200){
                var d = $.parseJSON(data['responseText']);
                /*
                jQuery('#interactive_name').html(d['name'] + ":");
                if (d['name'] === undefined) {
                    jQuery('#interactive_name').html("this request:");
                }
                $('#interactive_output').text(JSON.stringify(d, null, '\t'));
                */
                $('#demo').text(JSON.stringify(d, null, '\t'));
                
            }
            else if (data['status'] == 404) {
                $('#demo').text(data['status'] + ' ' + data['statusText']);
            }
        }
    });
}
/*
function tryit(url){
	//alert(url);
	jQuery.ajax({
        dataType: 'json',
        url: url,
        context: document.body,
        complete: (data) => {
					if (data['status'] == 200){
							var d = $.parseJSON(data['responseText']);
						//alert(d.name);
							$('#modal-race-header').text(d.name);
						
							$('#demo').text(JSON.stringify(d, null, '\t'));
						$('#race-modal').modal('toggle');

					}
					else if (data['status'] == 404) {
							$('#demo').text(data['status'] + ' ' + data['statusText']);
					}
        }
    })

	
}
*/

function tryit(url){
	jQuery.ajax({
        dataType: 'json',
        url: url,
        context: document.body,
        complete: (data) => {
					if (data['status'] == 200){
							var d = $.parseJSON(data['responseText']);
						//alert(d.name);
							$('#class-name').text(d.name);
							$('#speed').text(d.speed + ' ft (' + Math.floor(d.speed/3.3) +' mt)');
							$('#demo').text(JSON.stringify(d, null, '\t'));
						//$('#race-modal').modal('toggle');

					}
					else if (data['status'] == 404) {
							$('#demo').text(data['status'] + ' ' + data['statusText']);
					}
        }
    });
}
$('#races').ready(function(){
    var call_url = domain + 'races';
    jQuery.ajax({
        dataType: 'json',
        url: call_url,
        context: document.body,
        
        complete: (data) => {
            if (data['status'] == 200){
                var d = $.parseJSON(data['responseText']);
                $.each(d.results, function(i, item) {
                        if(i%2 == 0){
                            var $tr = $('#races-table').append(
                                $('<tr role="row" class="odd" onclick="tryit(\'' + d.results[i].url + '\')">').append(
                                    $('<td>').text(d.results[i].name)
                                )
                            );
                            
                        //https://getbootstrap.com/docs/4.1/components/modal/#varying-modal-content
                        }else{
                            var $tr = $('#races-table').append(
                                $('<tr role="row" class="even" onclick="tryit(\'' + d.results[i].url + '\')">').append(
                                    $('<td>').text(d.results[i].name)
                                )
                            );
                        }
                });
                //$('#demo').text(JSON.stringify(d, null, '\t'));
                
            }
            else if (data['status'] == 404) {
                $('#demo').text(data['status'] + ' ' + data['statusText']);
            }
        }
    });
});

function request(){
    jQuery.ajax({
        dataType: 'json',
        url: call_url,
        context: document.body,
        complete: (data) => {
            if (data['status'] == 200){
                var d = $.parseJSON(data['responseText']);
                /*
                jQuery('#interactive_name').html(d['name'] + ":");
                if (d['name'] === undefined) {
                    jQuery('#interactive_name').html("this request:");
                }
                $('#interactive_output').text(JSON.stringify(d, null, '\t'));
                */
                $('#demo').text(JSON.stringify(d, null, '\t'));
                
            }
            else if (data['status'] == 404) {
                $('#demo').text(data['status'] + ' ' + data['statusText']);
            }
        }
    })
}

/*
$(document).ready(function(){
    alert('ciao');
     $.ajax({
        url: "http://dnd5eapi.co/api/races"
    }).then(function(data) {
       $('#prova').append(data);
    });
});
*/
//app.on('ready', createWindow)
