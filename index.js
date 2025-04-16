const form = document.getElementById('form');


form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                // result.innerHTML = "Form submitted successfully";
                Swal.fire({
                    title: "Santai bro..",
                    text: "Email kamu udah Terkirim kok..",
                    imageUrl: 'https://cdn.dribbble.com/users/1189768/screenshots/3160691/coffee.gif',
                    imageWidth: 200,
                    imageHeight: 200,
                    imageAlt: 'Ngopi',
                    background:" #F5E0C3",
                    confirmButtonText: 'Ya',
                    customClass: {
                        confirmButton: 'btn-confirm',
                      },
                     buttonsStyling: false 
                  });
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
        
        });
});