function castVote(candidateName) {
            const confirmVote = confirm(`Are you sure you want to vote for ${candidateName}?`);
            if (confirmVote) {
                alert(`Thank you for voting for ${candidateName}!`);
                document.querySelectorAll('.vote-button').forEach(button => {
                    button.disabled = true;
                    button.innerText = "Voting Closed";
                });
            }
        }

       function showAbout(name, details) {
    const formattedDetails = details.replace(/\. /g, '.<br><br>'); // Adds a line break after every sentence for better readability
    document.getElementById('aboutTitle').innerText = name;
    document.getElementById('aboutDetails').innerHTML = formattedDetails; // Ensures details display correctly with line breaks
    document.getElementById('aboutModal').style.display = 'flex';
}


        function closeAbout() {
            document.getElementById('aboutModal').style.display = 'none';
        }