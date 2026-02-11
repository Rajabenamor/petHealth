import Image from "next/image";
export default function catWellness() {
  return (
    <main className="min-h-screen bg-stone-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg mt-10 mb-10">
          <Image
            src="/assets/catnutrition.jpg"
            alt="an owner giving his cat food"
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
            When to Switch From Kitten to Cat Food
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Now that we know why it&apos;s important to feed your kitty an
            age-appropriate diet, the next big question is when to make the
            switch. Unfortunately, it&apos;s not like your pet magically (and
            obviously) transforms from a kitten into an adult overnight. The
            answer to “How long is a cat a kitten?” can be hard to determine.
            The process is gradual and often depends on the individual cat.
          </p>
          <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
            When to Switch to Adult Cat Food
          </h2>
          <p className="leading-relaxed">
            there are several signs we can use as guidelines for when it&apos;s
            time for adult food. Here are some clues to watch out for that can
            help you figure out when to switch from kitten food to adult food.
          </p>
          <ul className="list-disc list-inside mt-2 ml-6 leading-relaxed">
            <li>
              <span className="font-bold">Growth : </span>
              During kittenhood, most visits to the vet include a review of your
              pet&apos;s progress on a veterinary growth chart. If the chart
              shows that your kitten&apos;s weight and length haven&apos;t
              changed for 6 to 8 weeks, it&apos;s usually a sign that
              they&apos;ve stopped growing and can switch to adult cat food.
            </li>
            <li>
              <span className="font-bold">Food left in the bowl : </span>If your
              kitten suddenly stops polishing off meals, that may be a sign that
              their body doesn&apos;t need as many calories. It could be time to
              switch to a less calorie-dense adult food to satisfy their energy
              needs.
            </li>
            <li>
              <span className="font-bold">
                Your veterinarian&apos;s approval :{" "}
              </span>
              Ultimately, consult your veterinarian with any questions about
              whether your pet is ready for adult cat food. They can factor in
              all of the growth metrics, as well as any health details unique to
              your cat, to provide the best dietary guidance.
            </li>
          </ul>
        </article>
        {/* Article 2*/}
        <article className="max-w-2xl">
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg mt-10 mb-10">
            <Image
              src="/assets/cattraining.jpg"
              alt="an owner Training his cat"
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
            Can You Train a Cat?
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            the question of whether cats are actually trainable is a common one.
            After all, the same characteristics that make us love our cats
            (their intelligence, independence, and curiosity) often make them
            not-so-willing training partners.
            <br />
            So, can a cat do tricks let alone learn basic commands? Read on for
            everything you need to know about cat training, from how to train a
            cat to sit and high-five to whether or not you should teach her how
            to use the toilet.
          </p>
          <p className="leading-relaxed">
            A lot of people think that cats cana&apos;t be trained, but that is
            absolutely false.It just takes a little bit of practice and an
            openness to experimentation in the beginning to figure out what
            drives your cat.
          </p>
          <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
            Cat Training Techniques to Try
          </h2>
          <p className="leading-relaxed">
            Training your cat can be a trial-and-error process depending on her
            unique personality and preferences, so be flexible and willing to
            try out many different training times in short spurts.
            <br /> As you go, avoid punishments (like spraying your cat with a
            water bottle), as this can drive up your cat&apos;s stress and
            anxiety and may even damage your relationship with her. Instead, use
            positive reinforcement for good behavior with lots of rewards.
          </p>
          <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
            How to Train a Cat to Sit
          </h2>
          <p className="leading-relaxed">
            First things first: Can you train a cat to sit? Yes! In fact, "sit"
            is one of the most common and straightforward tricks to teach your
            cat.
            <br />
            Here&apos;s how to do it:
          </p>
          <ul className="list-disc list-inside mt-2 ml-6 leading-relaxed">
            <li>
              <span className="font-bold ">Step 1: </span>
              Lure your cat into the sitting position by holding a treat
              directly above her head and gradually moving it backwards. As your
              cat follows the treat, she will naturally sit down.
            </li>
            <li>
              <span className="font-bold">Step 2: </span>
              When she sits, immediately ID the good behavior with a click of
              your clicker or by saying "good kitty!" Give her a treat as a
              reward.
            </li>
            <li>
              <span className="font-bold">Step 3: </span>
              Repeat as necessary. After a few successes, pair the movement with
              a hand signal (like pointing down with your index finger) and a
              vocal command ("Leo",sit!).
            </li>
          </ul>
        </article>

        {/* Article 3*/}
        <article className="max-w-2xl">
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg mt-10 mb-10">
            <Image
              src="/assets/catvaccination.jpg"
              alt="a cat getting vaccinated"
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
            Everything You Need To Know About Cat Vaccinations
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Cat vaccinations are one of the most debated topics in the pet
            world. Knowing what vaccinations for your cat are necessary and
            which ones are optional can be confusing.
          </p>

          <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
            When Should You Vaccinate Your Cat?
          </h2>
          <p className="leading-relaxed">
            Kitten vaccines typically start between 6 to 8 weeks of age,
            depending on the vaccine, medical history, and the person
            administering the vaccine. The vaccines are then administered in a
            series every three to four weeks until the kitten reaches at least
            16 weeks of age. This series of vaccines are not the same for every
            kitten, and will vary slightly depending on when they received their
            first vaccines and their lifestyle. These vaccines are typically
            boostered at 1 year of age.
          </p>
          <p className="leading-relaxed">
            If you have an adult cat who has never been vaccinated, you’ll need
            to talk to your vet. The vet will advise you on the best vaccines
            for your fur baby after considering their age, lifestyle, breed,
            location, and pre-existing medical conditions. <br />
            Adult cats who have already been vaccinated will need booster shots
            after 1-3 years, depending on the duration of the vaccine, location,
            and lifestyle.
          </p>
          <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
            Do I Need to Vaccinate My Cat?
          </h2>
          <p className="leading-relaxed">
            The answer to this question is yes. <br />
            According to the American Association of Feline Practitioners, your
            cat should be vaccinated. Cat vaccinations are also scientifically
            and medically proven to be beneficial. Such vaccinations minimize
            the transmission of fatal diseases and viruses that can cause
            lifelong illness in cats.
            <br />
            Furthermore, vaccinating your cat against diseases such as rabies
            ensures that you and other animals in your home are safe from fatal
            diseases.
          </p>
        </article>
      </div>
    </main>
  );
}
