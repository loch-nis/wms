async function updateWare(request, barcode)
{
    const response = await fetch(`api/wares/${barcode}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json',
                   'Accept'      : 'application/json'
         },
        body: JSON.stringify({ quantityDelta: request}),
});
    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response from server:', errorData);
        return response.status;}

    else {
    const data = await response.json();
    console.log(data);
    return response.status;
    }
    
};



async function manualBarcodeCheck(barcode)
{
    const response = await fetch(`api/wares/${barcode}`);

        if (response.status === 404){
            return "Barcode not found in database.";
        }
    
    const ware = await response.json();

    return `${ware.name}, pris: ${ware.price}, placering: ${ware.placement_id}, antal: ${ware.quantity}. `;
};

async function postWare(request)
{
    const response = await fetch('api/wares', {method: 'POST',
        headers: { 'Content-Type': 'application/json',
                   'Accept'      : 'application/json'
        },
        body: JSON.stringify(
            {
                barcode: request.makeWareBarcode,
                name: request.name,
                quantity: request.quantity,
                price: request.price,
                placement_id: request.placement
            }),
    })
    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response from server:', errorData);
        return response.status;}

    else {
    const data = await response.json();
    console.log(data);
    return response.status;
    }
}

function createElement(string)
{
    const text = document.createElement("label");
    text.textContent = `${string}: `;
    const inputField = document.createElement("input");
    text.appendChild(inputField);
    return text;
}