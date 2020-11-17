import headshot from "./images/headshot.jpg";

function ProfileContent() {
  return (
    <div id="profileContent" className="profileContent">
      <img
        className="profileContent--image"
        src={headshot}
        alt="Profile Headshot"
      ></img>
      <div>
        <h2 className="profileContent--header">A little about me</h2>
        <p className="profileContent--bio">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae ista amicitia est? Quam nemo umquam voluptatem appellavit, appellat; Sed plane dicit quod intellegit. Restatis igitur vos;

        Summus dolor plures dies manere non potest? Primum in nostrane potestate est, quid meminerimus? Sed erat aequius Triarium aliquid de dissensione nostra iudicare. Quid enim de amicitia statueris utilitatis causa expetenda vides. Hoc simile tandem est? Vide, quantum, inquam, fallare, Torquate.

        Quid vero? Sed quod proximum fuit non vidit. Duo Reges: constructio interrete. Invidiosum nomen est, infame, suspectum.

        Hunc vos beatum; Sed quod proximum fuit non vidit. Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus; Vide, quantum, inquam, fallare, Torquate.`}</p>
      </div>
    </div>
  );
}

export default ProfileContent;
