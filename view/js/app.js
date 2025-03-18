let tblEl = document.querySelector("tbody")

async function readData() {
    await fetch(`/api/bike/all`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
    .then(res => {
        console.log(`all bikes =`, res)
        printData(res.bikes)
    }).catch(err => console.log(err.message))
}

readData()


// delete bike info
let deleteHandler = async (id) => {
    if(window.confirm(`Are you sure to delete bike id = ${id}?`)) {
        await fetch(`/api/bike/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(res => {
            alert(res.msg)
            window.location.reload()
        }).catch(err => alert(err.message))
    } else {
        alert('delete terminated')
    }
}


// print 
const printData = (data) => {
    data.forEach(item => {
        tblEl.innerHTML  += `<tr>
                                <td> ${item.title} </td>
                                <td> ${item.color} </td>
                                <td> ${item.model} </td>
                                <td> ${item.company} </td>
                                <td> ${item.price} </td>
                                <td>
                                   <div class="btn-group">
                                          <a href="/edit/${item._id}" class="btn success"> <i class="bi bi-pencil"></i> </a>
                                    <button onclick="deleteHandler('${item._id}')" class="btn danger"> <i class="bi bi-trash"></i> </button>
                                   </div>
                                </td>
                            </tr>`
    });
}