import Image from "next/image";
export default function dogWellness() {
  return (
    <main className="min-h-screen bg-stone-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg mt-10 mb-10">
          <Image
            src="/assets/dognutrition.jpg"
            alt="a pot of food in front of a dog"
            fill
            className="object-cover"
          />
        </div>
        {/* Article 1*/}
        <article className="max-w-2xl">
          <span className="text-yellow-700 text-xs font-bold uppercase tracking-widest bg-yellow-100 px-3 py-1 rounded-full">
            Nutrition
          </span>
          {/* The Content */}
          <h2
            id="nutrition"
            className="text-3xl font-bold text-amber-900 mt-4 mb-3"
          >
            Chicken Allergy in Dogs
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Dogs, like humans, can be allergic to many things, including
            environmental factors and food. Nailing down what&apos;s causing the
            allergies in your dog can be a long and frustrating process.
          </p>
          <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
            Can Dogs Be Allergic to Chicken?
          </h2>
          <p className="leading-relaxed">
            Yes, dogs can be allergic to chicken. Chicken is the primary protein
            source in many commercial dog foods. It&apos;s highly palatable,
            inexpensive, and an excellent source of protein, healthy fats, and
            essential vitamins and minerals. However, this ubiquity also makes
            chicken a frequent culprit in canine allergies.
          </p>
          <h3 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
            Symptoms of a Chicken Allergy in Dogs
          </h3>
          <p className="leading-relaxed">
            There are many symptoms of chicken allergies in dogs, including:
          </p>
          <ul className="list-disc list-inside mt-2 ml-6 leading-relaxed">
            <li>
              <span className="font-bold">Itchy skin: </span>
              Persistent scratching, licking or biting, especially around the
              face, paws
            </li>
            <li>
              <span className="font-bold">Hair loss : </span>
              secondary to the licking and biting at skin
            </li>
            <li>
              <span className="font-bold">Gastrointestinal upset:</span>
              vomiting, diarrhea, bloating, flatulence, or other chronic
              digestive issues
            </li>
            <li>
              <span className="font-bold">Recurrent ear infections: </span>
              often accompanied by redness and unpleasant odor
            </li>
            <li>
              <span className="font-bold">Chronic inflammation: </span>
              red inflamed skin and feet or recurrent skin infections
            </li>
            <li>
              <span className="font-bold">Respiratory issues: </span>
              sneezing, coughing, and wheezing
            </li>
          </ul>
        </article>
        {/* Article 2*/}
        <article className="max-w-2xl">
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg mt-10 mb-10">
            <Image
              src="/assets/dogtraining.jpg"
              alt="owner training his dog"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-yellow-700 text-xs font-bold uppercase tracking-widest bg-yellow-100 px-3 py-1 rounded-full">
            Training
          </span>
          {/* The Content */}
          <h2
            id="training"
            className="text-3xl font-bold text-amber-900 mt-4 mb-3"
          >
            Scent Training for Dogs
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            A dog&apos;s sense of smell is estimated to be hundreds to thousands
            of times more powerful than our own That&apos;s what makes dogs such
            great candidates for scent training.
            <br />
            Scent training for dogs gives canines a chance to use their enhanced
            olfaction to detect everything from illicit drugs to explosives, as
            well as illnesses like cancer and diabetes. That&apos;s great news
            for us humans, but we&apos;re not the only ones to benefit from
            scent work.
          </p>
          <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
            How Dog Scent Training Works
          </h2>
          <p className="leading-relaxed">
            As you might expect, how scent training is conducted varies
            depending on whether a dog will be sniffing for fun, for sport, or
            for work.
          </p>

          <p className="leading-relaxed">
            Pet parents can also find professional trainers who will teach dogs
            how to detect scents for fun or sport. And while the training is
            often based on the same principles used for working dogs, the
            standards are not nearly as stringent.
            <br />
            In scent-training&apos;s classes, dogs start out by searching for
            either a favorite toy or food reward that&apos;s been hidden in a
            series of increasingly challenging environments. New challenges and
            search skills are added as the dog progresses. Once a dog has
            mastered the basics, the search target changes to a unique scent,
            such as birch, anise, or clove. Now the dog learns how to search by
            odor only, according to a scent cue. When they find the source of
            the scent, a tasty treat or favorite toy rewards them and reinforces
            the lesson.
          </p>
        </article>

        {/* Article 3*/}
        <article className="max-w-2xl">
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg mt-10 mb-10">
            <Image
              src="/assets/dogvaccination.jpg"
              alt="a dog getting vaccinated"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-yellow-700 text-xs font-bold uppercase tracking-widest bg-yellow-100 px-3 py-1 rounded-full">
            Vaccination
          </span>
          {/* The Content */}
          <h2
            id="vaccination"
            className="text-3xl font-bold text-amber-900 mt-4 mb-3"
          >
            Vaccine Reactions in Dogs
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Vaccinations save lives and are an important part of keeping dogs
            safe and healthy. By vaccinating early and regularly, serious and
            even fatal infectious diseases, like canine parvovirus and rabies,
            can be avoided entirely. While the benefits of vaccinations greatly
            outweigh the risks, vaccine reactions in dogs are possible and do
            happen. Here&apos;s everything dog owners need to know about dog
            vaccine reactions.
          </p>

          <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
            Do Dogs Develop Vaccine Reactions?
          </h2>
          <p className="leading-relaxed">
            Modern vaccines are extremely safe and effective, but dogs can still
            experience vaccine reactions. In almost all cases, dog vaccine
            reactions are mild and do not require treatment, but in very rare
            cases, more severe reactions can occur and require immediate medical
            intervention.
          </p>

          <p className="leading-relaxed">
            Dogs with immune-mediated diseases are not at a higher risk for
            vaccination reactions despite a popular theory that vaccination
            could induce a relapse of that disease. Fortunately, research does
            not support a link between vaccination and the development of
            immune-mediated diseases.
          </p>
          <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
            Signs of Dog Vaccine Reactions
          </h2>
          <p className="leading-relaxed">
            After a vaccine is injected, it will stimulate an inflammatory
            response. This ensures that the body recognizes the antigen,
            triggers the immune system, and creates the antibodies needed for
            protection. Therefore, mild inflammatory symptoms after vaccinations
            are expected and common. Dogs with mild, common vaccination
            reactions can display one or more of the following:
          </p>
          <ul className="list-disc list-inside mt-2 ml-6 leading-relaxed">
            <li>Soreness or swelling at the injection site</li>
            <li>Mild fever</li>
            <li>Reduced energy</li>
            <li>Decreased appetite</li>
            <li>Sneezing after a nasal vaccine</li>
          </ul>
          <p className="leading-relaxed">
            These symptoms are all considered part of the normal vaccination
            process and are a sign that the body is working toward creating the
            protective response. Pet parents should take note of these and keep
            a close eye on their dog for resolution of the symptoms, but
            treatment is not usually necessary, and no modifications need to be
            made for future vaccinations.
            <br />
            Signs of serious vaccine reactions in dogs are as follows:
          </p>
          <ul className="list-disc list-inside mt-2 ml-6 leading-relaxed">
            <li>Vomiting or diarrhea</li>
            <li>Puffy eyes</li>
            <li>Small, raised bumps on the body</li>
            <li>Decreased appetite</li>
            <li>Difficulty breathing</li>
            <li>Collapse</li>
          </ul>
        </article>
      </div>
    </main>
  );
}
