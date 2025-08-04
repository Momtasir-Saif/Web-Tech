document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("donationForm");

    
    
    }
    form.addEventListener("submit", function (e) {
        e.preventDefault();

    
        let email = document.getElementById("email").value.trim();
        let zip = document.getElementById("zip").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let amountChecked = document.querySelector('input[name="donationAmount"]:checked');
        let otherAmount = document.getElementById("otherAmount").value.trim();
        let recurring = document.getElementById("recurring").checked;
        let monthlyAmount = document.getElementById("monthlyAmount").value.trim();
        let months = document.getElementById("months").value.trim();

        
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
            return;
        }

        
        if (!/^\d+$/.test(phone)) {
            alert("Phone number must contain digits only.");
            return;
        }

        if (!/^\d+$/.test(zip)) {
            alert("Zip code must contain digits only.");
            return;
        }

       
        

       
        if (amountChecked && amountChecked.value === "Other" && !/^\d+(\.\d{1,2})?$/.test(otherAmount)) {
            alert("Please enter a valid number for 'Other Amount'.");
            return;
        }

        
        

        setTimeout(() => {
        window.location.href =" lab3_thankyou.html"; 
      }, 1000);
        form.reset();
    });

    const resetBtn = form.querySelector('input[type="reset"]');
    resetBtn.addEventListener("click", function (e) {
        const confirmReset = confirm("Are you sure you want to reset the form?");
        if (!confirmReset) {
            e.preventDefault();
        }
    });
});
