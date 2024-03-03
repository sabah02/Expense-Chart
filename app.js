let userData;

fetch('./data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Some network error');
        }
        return response.json();
    })
    .then(data => {
        userData = data;

        let bars = document.querySelectorAll('.bar');

        bars.forEach(bar => {
            let barId = parseInt(bar.getAttribute('id'));

            let barHeight = userData[barId - 1].amount;
            bar.style.height = barHeight * 2 + 'px';

            let barParent = bar.parentNode;
            barParent.style.position = 'relative';

            bar.addEventListener('mouseenter', event => {
                let id = parseInt(event.target.getAttribute('id'));
                let amount = userData[id - 1].amount;

                let hoverBox = document.createElement('div');
                hoverBox.classList.add('hover-box');
                hoverBox.textContent = amount;

                // Position the hover box on top of the bar
                hoverBox.style.position = 'absolute';
                hoverBox.style.top = -40 + 'px'; // Adjust as needed
                hoverBox.style.left = '50%';
                hoverBox.style.transform = 'translateX(-50%)';
                hoverBox.style.backgroundColor = '#382314'; // Background color
                hoverBox.style.padding = '4px'; // Padding
                hoverBox.style.border = '1px solid #000000'; // Border
                hoverBox.style.borderRadius = '4px'; // Border radius
                hoverBox.style.color = '#f8e9dd';

                // Append hover box to the bar's parent
                bar.appendChild(hoverBox);
            });

            bar.addEventListener('mouseleave', event => {
                let barParent = event.target;
                let hoverBox = barParent.querySelector('.hover-box');
                if (hoverBox) {
                    barParent.removeChild(hoverBox);
                }
            });
        });
    })
    .catch(error => {
        console.error('Error : ', error);
    });
