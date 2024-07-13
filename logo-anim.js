$(document).ready(function() {
    var num = 0;
    $('#Logo').hover(
        function() {
            num++;
            $(this).css('transition', `300ms`);
            if (num == 1) {
                $(this).css('transform', `rotate(20deg) scale(1.15)`);
            }
            if (num == 2) {
                $(this).css('transform', `rotate(-20deg) scale(1.15)`);
                num=0;
            }
        },
        function() {
            $(this).css('transform', 'rotate(0deg) scale(1)');
        }
    );
});
