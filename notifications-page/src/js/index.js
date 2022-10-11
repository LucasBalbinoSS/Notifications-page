const $notfBlocks = document.querySelectorAll('.notf-block')
const $btnMarkAllAsRead = document.querySelector('#js-mark-all-as-read')
const $btnMarkAllAsUnread = document.querySelector('#js-mark-all-as-unread')


$notfBlocks.forEach(function($notfBlock) {
    counterValidation()
    notfReadOnClick($notfBlock)
    markAllAsRead($notfBlock)
    markAllAsUnread($notfBlock)
})


// functions
function notfReadOnClick($target) {
    $target.addEventListener('click', function() {
        notfRead($target)
        counterValidation()
    })
}

function counterValidation() {
    const $notfUnreadBlocks = document.querySelectorAll('.notf-block-unread')

    noftNumber()

    if ($notfUnreadBlocks.length == 0) {
        hide($btnMarkAllAsRead)
        show($btnMarkAllAsUnread)
    }
    function noftNumber() {
        let $notfNumber = document.querySelector('#js-notf-number')
        const quantity = $notfUnreadBlocks.length

        $notfNumber.innerHTML = quantity

        if (quantity == 0) {
            hide($notfNumber)
        }
        else {
            show($notfNumber)
        }
    }
}

function markAllAsRead($target) {
    $btnMarkAllAsRead.addEventListener('click', function() {
        notfRead($target)
        hide($btnMarkAllAsRead)
        show($btnMarkAllAsUnread)

        counterValidation()
    })
}

function markAllAsUnread($target) {
    $btnMarkAllAsUnread.addEventListener('click', function() {
        notfUnread($target)
        hide($btnMarkAllAsUnread)
        show($btnMarkAllAsRead)

        counterValidation()
    })
}

// remove and add styles
function show($target) {
    $target.style.display = 'block'

}

function hide($target) {
    $target.style.display = 'none'
}

// remove and add classes
function notfRead($target) {
    $target.classList.remove('notf-block-unread')
}

function notfUnread($target) {
    $target.classList.add('notf-block-unread')
}