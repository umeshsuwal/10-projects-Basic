window.addEventListener("load",checkInternetConnection);

function checkInternetConnection(){

    const statusText = document.getElementById('statusText');
    const addressText = document.getElementById('addressText');
    const strengthText = document.getElementById('strengthText');

    statusText.textContent = 'Checking.....'

    if(navigator.onLine){

        fetch('https://api.ipify.org?format=json')
        .then((response)=> response.json())
        .then((data)=>{

            addressText.textContent = data.ip;
            statusText.textContent = 'Connected'

            const connection = navigator.connection;

            const networkStrength = connection ?connection.downlink 
            +'Mbps' : 'Unknown';
            strengthText.textContent = networkStrength;

        })
        .catch(()=>{
            statusText.textContent = 'Disconnected';
            addressText.textContent = '-'
            strengthText.textContent = '-'
        })

    }
    else
    {
        statusText.textContent = 'Disconnected';
        addressText.textContent = '-'
        strengthText.textContent = '-'
    }

}