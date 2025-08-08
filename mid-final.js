document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("donationForm");
    if (!form) return; // Stop if form not found

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Safely get values
        let firstName = (document.getElementById("firstName")?.value || "").trim();
        let lastName = (document.getElementById("lastName")?.value || "").trim();
        let email = (document.getElementById("email")?.value || "").trim();
        let zip = (document.getElementById("zip")?.value || "").trim();
        let phone = (document.getElementById("phone")?.value || "").trim();
        let amountChecked = document.querySelector('input[name="donationAmount"]:checked');
        let otherAmount = (document.getElementById("otherAmount")?.value || "").trim();
        let recurring = document.getElementById("recurring")?.checked || false;
        let monthlyAmount = (document.getElementById("monthlyAmount")?.value || "").trim();
        let months = (document.getElementById("months")?.value || "").trim();

       
        // Email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Phone number validation
        if (!/^\d+$/.test(phone)) {
            alert("Phone number must contain digits only.");
            return;
        }

        // Zip code validation
        if (!/^\d+$/.test(zip)) {
            alert("Zip code must contain digits only.");
            return;
        }

        // "Other Amount" validation
        if (amountChecked && amountChecked.value === "Other" && !/^\d+(\.\d{1,2})?$/.test(otherAmount)) {
            alert("Please enter a valid number for 'Other Amount'.");
            return;
        }

        // Redirect after 1 second
        setTimeout(() => {
            window.location.href = "thankyou.html";
        }, 1000);

        form.reset();
    });

    // Reset button confirmation
    const resetBtn = form.querySelector('input[type="reset"]');
    if (resetBtn) {
        resetBtn.addEventListener("click", function (e) {
            const confirmReset = confirm("Are you sure you want to reset the form?");
            if (!confirmReset) {
                e.preventDefault();
            }
        });
    }
});
