document.addEventListener('DOMContentLoaded', function(){
    const card = document.querySelector('.course-link.card');
    if(card) {
        card.style.transform = 'translateY(10px)';
        card.style.opacity = '0';
        setTimeout(()=>{ card.style.transition = 'all 400ms ease'; card.style.transform = 'translateY(0)'; card.style.opacity = '1'; }, 200);
    }

    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if(btn.tagName === 'A') return;
            location.href = 'csharp.html';
        });
    });
});