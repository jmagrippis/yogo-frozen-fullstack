const steps = [
  { label_en: 'Pick your base', label_el: 'Διάλεξε γεύση' },
  { label_en: 'Add your toppings', label_el: 'Πρόσθεσε toppings' },
  { label_en: 'Enjoy!', label_el: 'Απόλαυσε!' }
]

const headline = {
  content_en: 'Enjoying summer is as simple as 1, 2, 3!',
  content_el: 'Απόλαυσε... καλοκαίρι με 3 βήματα!'
}

const body = {
  content_en: [
    'No matter the calendar season, you can always get that "sunshine and lollipops" feeling by devouring some Yogo Frozen!',
    'Create your own cup full of summer in three simple steps:'
  ],
  content_el: [
    'Ανεξαρτήτως εποχής, μπορείς να γεμίσεις ηλιόλουστη και δροσιστική διάθεση τρώγοντας Yogo Frozen!',
    'Φτιάξε ένα κυπελλάκι που θα ξεχυλίζει καλοκαίρι, ακολουθώντας τρία απλά βήματα:'
  ]
}

const buttons = {
  content_en: {
    back: 'back',
    next: 'next',
    vote: 'vote!'
  },
  content_el: {
    back: 'ΠΙΣΩ',
    next: 'ΕΠΟΜΕΝΟ',
    vote: 'ΨΗΦΙΣΕ!'
  }
}

const flavourIntro = {
  content_en: 'It all starts with a solid base! From plain classic, to special cranberry, you can rest assured you will always be getting fresh, pure, Greek yoghurt.',
  content_el: 'Όλα ξεκινούν απο μία σταθερή βάση! Από απλή κλασσική σε ιδιαίτερο cranberry, το σίγουρο είναι ότι πάντα θα παίρνεις φρέσκο, καθαρό, Ελληνικό γιαούρτι.'
}

const toppingsIntro = {
  content_en: 'Perfect! Next step is to add as many of our delicious toppings as your heart desires! With our healthy 2% fat milk backing you all the way, you can afford the treat without hampering your diet.',
  content_el: 'Τέλεια! Το επόμενο βήμα είναι να προσθέσεις όσα από τα πεντανόστιμά μας toppings τραβάει η καρδιά σου! Με το υγιέστατο γάλα μας 2% λιπαρών να σε στηρίζει, σε παίρνει να βάλεις μια λιχουδιά ακόμα, χωρίς να πάει πίσω η διατροφή σου.'
}

const votingIntro = {
  content_en: [
    'The last and definitely most important step, is to enjoy your tasty creation.',
    'It is also the easiest step! Who wouldn\'t enjoy a fresh froyo',
    'If you are satisfied with your picks and are wondering what the most popular ones are, vote!'
  ],
  content_el: [
    'Το τελευταίο και πιο σημαντικό βήμα είναι να απολαύσεις τη δημιουργία σου.',
    'Ταυτόχρονα είναι και το πιο εύκολο! Ποιός δεν θα απολάμβανε ένα φρέσκο παγωμένο γιαούρτι',
    'Έαν είσαι ευχαριστημένος από τις επιλογές σου και αναρωτιέσαι ποιές είναι οι πιο δημοφιλής, ψήφισε!'
  ]
}

const voted = {
  content_en: 'Thanks for voting! We\'ll get back to you once we start processing votes.',
  content_el: 'Ευχαριστούμε για την ψήφο σας! Θα επανέλθουμε όταν ξεκινήσουμε την καταμέτρηση.'
}

export default {
  steps,
  headline,
  body,
  buttons,
  flavourIntro,
  toppingsIntro,
  votingIntro,
  voted
}
