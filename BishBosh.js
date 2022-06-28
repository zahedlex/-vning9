
function BishBosh(){

    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var n2 = parseFloat(document.getElementById('n3').value);

    if(n1 && n3) {

                    for(let i = 1; i < n3; i++){
                     
                       document.getElementById('result').value = i % n1 == 0;
                        console.log('Bish');
                }
    
            }
            else if(n2 && n3) {

                for(let i = 1; i < n3; i++){
                 
                   document.getElementById('result').value = i % n2 == 0;
                    console.log('Bosh');
            }
            }

        else{

            for(let i = 1; i < n3; i++){
             
               document.getElementById('result').value = i % n1 == 0 && i % n2 == 0;
                console.log('Bish-Bosh');
        }
    

    }
}
            
