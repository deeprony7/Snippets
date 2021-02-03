$.ajax({
    url: url,
    type: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`
    },
    async: false,
    dataType: 'json', // added data type
    success: function (res) {
        // console.log("from ajax", res);
        metadata = res
    },
    error: function (request, error) {
        console.log(("Request: " + JSON.stringify(request)));
        if (error == 'invalid_token') {
            window.location = "/login"
            // console.log("token error", metadata);
        } else {
            $("#flash").text("Error encountered on fetching data from backend. Error: " + metadata.error)
        }
    }
});
