const users = [
            { voterid: '1234567890', password: 'password1' },
            { voterid: '1234567890', password: 'password2' }
        ];

        function authenticate(event) {
            event.preventDefault();
            const voterid = document.getElementById('voterid').value;
            const password = document.getElementById('password').value;

            const user = users.find(u => u.voterid === voterid && u.password === password);

            if (user) {
                window.location.href = "dashboard.html";
            } else {
                alert('Invalid Voter ID or Password');
            }
        }