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
        <p className="profileContent--bio">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta, nunc quis sollicitudin imperdiet, magna augue cursus erat, id interdum eros enim quis est. Vivamus ut purus facilisis, tempus ante a, sagittis massa. Morbi accumsan cursus consequat. Fusce tempor ante eu laoreet ornare. Proin placerat luctus leo aliquet fringilla. Duis egestas odio et volutpat lacinia. Sed vehicula ipsum sed eleifend aliquam. Curabitur risus libero, eleifend ornare fermentum malesuada, dictum eu mauris. Nullam auctor sem erat, nec scelerisque ante ultrices sed. Phasellus congue placerat ornare. Quisque arcu ante, aliquam non maximus porttitor, luctus sit amet nisl. Nunc ligula lacus, interdum id hendrerit eu, laoreet eget mi. Mauris vel pharetra sapien. Suspendisse in massa gravida, volutpat sem nec, sollicitudin eros. Donec non pulvinar ex, eget auctor elit.

         In facilisis leo non risus faucibus, vel dapibus neque porta. Ut pellentesque consectetur risus non iaculis. Cras imperdiet odio id congue placerat. Suspendisse non enim laoreet, porttitor mauris nec, consequat turpis. Ut eu mauris non dui laoreet volutpat. In mollis, est efficitur aliquam eleifend, tellus diam placerat sem, sed sodales odio purus ac felis. Etiam scelerisque sapien ut nisi dapibus, non molestie velit luctus. Etiam viverra elit et justo dictum lobortis. Maecenas congue vestibulum convallis. Nulla est urna, pharetra sed lorem id, laoreet euismod velit. Etiam auctor neque eget nisl dictum dictum sed eleifend risus.

         Curabitur diam ligula, malesuada ut dapibus quis, tristique vel quam. Suspendisse in metus dictum, tincidunt felis vitae, elementum nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum arcu tellus. Suspendisse tincidunt, ligula at pulvinar sodales, lorem tellus pulvinar ex, sit amet molestie justo nibh in magna. Etiam blandit erat ut orci viverra gravida. Donec mi lectus, scelerisque ac tempor sit amet, efficitur sit amet libero. Aenean tincidunt libero sed ante hendrerit rhoncus. Vestibulum lobortis euismod urna sed vestibulum. Vestibulum eleifend sapien ipsum. Etiam dapibus sapien id velit fringilla, vel varius purus congue.

         Aliquam consequat justo mi, rhoncus consequat augue tincidunt id. Nunc sit amet venenatis ligula. Nulla ut nibh viverra, efficitur lacus a, aliquet purus. Donec at porta ipsum. Nulla dignissim odio a tincidunt finibus. Vestibulum tempus vel libero at tempor. Cras vulputate orci tortor, vitae luctus eros aliquet et. Duis egestas pellentesque massa pulvinar finibus. Mauris elit orci, feugiat et nisi at, efficitur tempus nibh. Morbi et turpis eget ante gravida tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas ligula tellus, convallis ac accumsan vel, tincidunt quis arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

         Donec a lectus nec leo scelerisque tincidunt in nec magna. Vestibulum lectus quam, fermentum a neque in, finibus ullamcorper risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur quis auctor dui. Mauris in congue lorem. Sed dignissim, risus in vulputate viverra, tellus libero rhoncus lacus, vel varius nulla dui a nisl. Etiam placerat mauris id scelerisque fringilla. Mauris venenatis placerat erat, sit amet bibendum eros sagittis a. Quisque vel iaculis nunc. Integer sodales lorem nec risus dictum, quis imperdiet libero maximus. Aenean ullamcorper rhoncus erat ut suscipit. Etiam interdum vestibulum est, quis tempus ex iaculis eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sollicitudin mauris ex, sed maximus nibh bibendum a. Sed in urna tellus. Nunc congue ligula id turpis condimentum, sed dapibus dui tempus.

         Ut feugiat tincidunt facilisis. Maecenas et scelerisque nisi, a tincidunt libero. Maecenas ut justo nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque lobortis, mi et tincidunt venenatis, neque augue dapibus dui, quis cursus diam odio vel ex. Nunc maximus enim orci, ac tincidunt lectus varius sed. Nam posuere massa sem, eu mattis eros faucibus at. Donec rhoncus, neque eget tempus tincidunt, nulla ante blandit dui, in malesuada purus quam vel velit. Maecenas finibus laoreet ullamcorper. Proin in ligula ut ligula volutpat ultricies. Phasellus vitae pellentesque nibh, in suscipit risus. Quisque aliquam et justo at pretium.`}</p>
      </div>
    </div>
  );
}

export default ProfileContent;
