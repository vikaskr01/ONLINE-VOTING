function openModal() {
            document.getElementById('passwordModal').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('passwordModal').style.display = 'none';
        }

        function updatePassword() {
            const currentPassword = document.getElementById('currentPassword').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (!currentPassword || !newPassword || !confirmPassword) {
                alert("Please fill all the fields.");
                return;
            }

            if (newPassword !== confirmPassword) {
                alert("New password and confirm password do not match.");
                return;
            }

            alert("Password successfully updated!");
            closeModal();
            // Add backend integration here to update password in the database
        }