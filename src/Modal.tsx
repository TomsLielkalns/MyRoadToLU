import Modal from "react-modal";

import AN_baznica from "./assets/pictures/AN_baznica.jpg";
import dailes_teatris from "./assets/pictures/dailes_teatris.jpg";
import evolution from "./assets/pictures/evolution.jpg";
import gaisa_tilts from "./assets/pictures/gaisa_tilts.jpg";
import lu from "./assets/pictures/lu.jpg";
import new_gertrudes_baznica from "./assets/pictures/new_gertrudes_baznica.jpg";
import old_gertrudes_baznica from "./assets/pictures/old_gertrudes_baznica.jpg";
import orthadox_katedrale from "./assets/pictures/orthadox_katedrale.jpg";
import brivibas_piemineklis from "./assets/pictures/brivibas_piemineklis.jpg";
import radisons from "./assets/pictures/radisons.jpg";
import stura_maja from "./assets/pictures/stura_maja.jpg";
import vef_pils from "./assets/pictures/vef_pils.jpg";
import vermanes from "./assets/pictures/vermanes darzs.jpg";

type MapKeyToTextProps = {
  currentlyOpenModal: string;
};

const MapKeyToText = ({ currentlyOpenModal }: MapKeyToTextProps) => {
  let title = "";
  let content = "";
  let image = "";
  let imageAlt = "";

  switch (currentlyOpenModal) {
    case "lu":
      title = "Latvijas Universitāte";
      content = "Galapunkts, Latvijas Universitāte, laiks gūt zināšanas!";
      image = lu;
      imageAlt = "Latvijas Universitāte";
      break;
    case "vefPalace":
      title = "VEF Kultūras pils";
      content = "Nekad neesmu apmeklējis, bet izskata ziņā - patīkama ēka.";
      image = vef_pils;
      imageAlt = "VEF Kultūras pils";
      break;
    case "gaisaTilts":
      title = "Gaisa tilts";
      content =
        "Nekad nav paticis braukt pāri ar transporta līdzekli, kas nav tramvajs, vairāk kratīšanās nekā braukšana. Tilts arī novecojis, bet palīdz braucot mājās pievērst uzmanību, ja esmu par ko aizdomājis.";
      image = gaisa_tilts;
      imageAlt = "Gaisa tilts";
      break;
    case "evolutionBuilding":
      title = "Evolution Latvia ēka";
      content =
        'Vienmēr likusies modernākā ēka, kura redzama uz Brīvības ielas, un novietojums arī ir vizuāli patīkams, jo līdzīgi, kā jaunā Ģertrūdes baznīca - ēka atrodas Cēsu ielas un Brīvības ielas "saliņas" galā.';
      image = evolution;
      imageAlt = "Evolution Latvia ēka";
      break;
    case "newGertrudesChurch":
      title = "Rīgas Jaunā Svētās Ģertrūdes evaņģēliski luteriskā baznīca";
      content =
        'Ēkas novietojums patīkamā vietā - Cēsu ielas un Brīvības ielas "saliņas" galā. Braucot garām vienmēr pie sevis nodomāju - "Kā cilvēki tiek uz baznīcu ja nav nevienas gājēju pārejas?".';
      image = new_gertrudes_baznica;
      imageAlt = "Rīgas Jaunā Svētās Ģertrūdes evaņģēliski luteriskā baznīca";
      break;
    case "dailesTheater":
      title = "Dailes teātris";
      content =
        "Bija iespēja redzēt, kā notiek ēkas pagalma remonts, bet nekad nav bijis laika apmeklēt kādu izrādi. Pats pagalms ir ļoti patīkams, jo ir daudz soliņu, viņš ir tīrs un kārtīgs. Vasarā gan tik nav kur no saules paslēpties.";
      image = dailes_teatris;
      imageAlt = "Dailes teātris";
      break;
    case "cornerHouse":
      title = "Stūra Māja";
      content =
        "Esmu apmeklējis, bija interesanti stāsti par ēku no PSRS laikiem. Dažviet telpas diezgan biedējošas, it īpaši nakts laikā, ja iet grupā apmeklēt, ir vērts nobiedēt kādu no draugiem, ja viņi nav iepriekš šeit bijuši.";
      image = stura_maja;
      imageAlt = "Stūra Māja";
      break;
    case "oldGertrudesChurch":
      title = "Rīgas Vecā Svētās Ģertrūdes evaņģēliski luteriskā baznīca";
      content =
        "Vienmēr patīkami redzēt vecās ēkas, kuras ir saglabājušās līdz mūsdienām. Parasti asocējās ar visskaļāko zvanu centrā.";
      image = old_gertrudes_baznica;
      imageAlt = "Rīgas Vecā Svētās Ģertrūdes evaņģēliski luteriskā baznīca";
      break;
    case "anChurch":
      title = "Svētā Aleksandra Ņevska pareizticīgo baznīca";
      content = "Līdz šij dienai nezināju, ka šī ir baznīca. Ēka izceļas ar savu krāsu.";
      image = AN_baznica;
      imageAlt = "Svētā Aleksandra Ņevska pareizticīgo baznīca";
      break;
    case "radisons":
      title = "Radisson Blu";
      content = "Radisons. Esmu bijis tikai uzņemšanas telpā, iekšā viss ļoti grezni.";
      image = radisons;
      imageAlt = "Radisson Blu";
      break;
    case "orthodoxCathedral":
      title = "Rīgas Kristus Piedzimšanas pareizticīgo katedrāle";
      content = "Manuprāt, visiespaidīgākā katedrale vai baznīca pa ceļam uz LU.";
      image = orthadox_katedrale;
      imageAlt = "Rīgas Kristus Piedzimšanas pareizticīgo katedrāle";
      break;
    case "freedomMonument":
      title = "Brīvības piemineklis";
      content =
        "Ir bijusi lieliska iespēja spert soli iekšā piemineklī un ierakstīt savu vārdu grāmatā. Diemžēl ja iekšā saiet daudz cilvēku, tur nav ventilācija un gandriz noģību.";
      image = brivibas_piemineklis;
      imageAlt = "Brīvības piemineklis";
      break;
    case "vermaneGarden":
      title = "Vērmanes dārzs";
      content =
        "Vērmanes dārzs ir viena no manām iecienītākajām vietām, jo tas ir viens no skaistākajiem un sakoptākajiem parkiem. Ejot cauri vienmēr esmu jutis sava veida iekšēju mieru.";
      image = vermanes;
      imageAlt = "Vērmanes dārzs";
      break;
    default:
      break;
  }
  return (
    <>
      <h1 className="text modal-h1">{title}</h1>
      <img src={image} alt={imageAlt} style={{ width: "100%" }} />
      <p>{content}</p>
    </>
  );
};

type ModalProps = {
  currentlyOpenModal: string;
  setCurrentlyOpenModal: (value: string) => void;
};

const ModalComponent = ({ currentlyOpenModal, setCurrentlyOpenModal }: ModalProps) => {
  console.log(currentlyOpenModal);
  function closeModal() {
    setCurrentlyOpenModal("");
  }

  const html = document.querySelector("html");
  if (!html) throw new Error("No html element found");
  const compStyles = window.getComputedStyle(html);
  const backgroundColor = compStyles.getPropertyValue("--color-background");

  return (
    <Modal
      isOpen={!!currentlyOpenModal}
      style={{
        overlay: { zIndex: 10000, backgroundColor: `${backgroundColor}BB` },
        content: {
          backgroundColor: backgroundColor,
        },
      }}
    >
      <div>
        <div style={{ display: "flex", alignItems: "flex-end", flexDirection: "column" }}>
          <button className="secondary-button modal-button" onClick={closeModal}>
            X
          </button>
        </div>
        <MapKeyToText currentlyOpenModal={currentlyOpenModal} />
      </div>
    </Modal>
  );
};

export default ModalComponent;
