import Image from "next/image";

export default function dogHealth() {
  return (
    <main className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg mt-10 mb-10">
          <Image
            src="/assets/dogHealth.png"
            alt="a dog at the veterinairy"
            fill
            className="object-cover"
          />
        </div>
        <p className="mt-5 text-base md:text-lg">
          Understanding dog health care is crucial for your furry friend&apos;s
          well-being. Regular veterinary check-ups can help identify potential
          health issues early on.
        </p>
        <p className="mt-5 text-base md:text-lg">
          Dogs can be prone to various health problems, such as obesity, which
          can lead to diabetes and arthritis.
        </p>
        <p className="mt-5 text-base md:text-lg">
          Your dog&apos;s diet plays a significant role in maintaining their
          overall health, so it&apos;s essential to choose a high-quality dog
          food that suits their age, breed, and health conditions.
        </p>
        <div className="mt-12 space-y-16 ml-0 md:ml-5">
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg mt-10 mb-10">
            <Image
              src="/assets/seniordog.jpg"
              alt="senior_dog"
              fill
              className="object-cover"
            />
          </div>
          {/* Article 1*/}
          <article className="max-w-2xl">
            <span className="text-yellow-700 text-xs font-bold uppercase tracking-widest bg-yellow-100 px-3 py-1 rounded-full">
              Vitamins
            </span>
            {/* The Content */}
            <h2
              id="vitamins"
              className="text-2xl md:text-3xl font-bold text-amber-900 mt-4 mb-3"
            >
              Senior Dog Supplements and Vitamins
            </h2>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed">
              Caring for senior dogs can be rewarding and simultaneously
              demanding on a pet parent. As your relationship with your dog
              deepens, their health challenges can begin to multiply.
            </p>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed">
              The good news is there are steps pet parents can take to help make
              the transition easier and better support aging canine companions.
              Senior dog vitamins and supplements for senior dogs are an option
              in your toolbox for maintaining and improving your pet&apos;s
              health and comfort. Here&apos;s how senior dog supplements and
              vitamins can help aging pets.
            </p>
            <h2 className="font-bold text-lg md:text-xl mt-2 text-yellow-700 leading-relaxed">
              Why Your Vet Might Recommend Senior Dog Supplements and Vitamins
            </h2>
            <p className="leading-relaxed">
              Veterinarians recommend that senior dogs go for twice yearly
              checkups. During these pet wellness visits, you should address any
              physical or behavioral concerns you have about your pet. You can
              also ask your vet whether supplements and vitamins for old dogs
              might help
            </p>
            <p className="leading-relaxed">
              In general, senior dogs may benefit from supplements and vitamins
              that support:
            </p>
            <ul className="list-disc list-inside mt-2 ml-4 md:ml-6 leading-relaxed">
              <li>Joint health</li>
              <li>Digestion</li>
              <li>Bladder control</li>
              <li>Anxiety and sleep issues</li>
            </ul>
          </article>

          {/* Article 2*/}
          <article className="max-w-2xl">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg mt-10 mb-10">
              <Image
                src="/assets/doginfection.jpg"
                alt="infection_dog"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-yellow-700 text-xs font-bold uppercase tracking-widest bg-yellow-100 px-3 py-1 rounded-full">
              Infections
            </span>
            {/* The Content */}
            <h2
              id="infection"
              className="text-2xl md:text-3xl font-bold text-amber-900 mt-4 mb-3"
            >
              Fungal Infections in Dogs You Should Know About
            </h2>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed">
              When you hear that your dog has an infection, you&apos;re most
              likely thinking of a bacterial or viral infection. However,
              viruses and bacteria aren&apos;t the only pathogens that can
              affect our pets. Dogs can also contract fungal infections.
            </p>
            <p className="leading-relaxed mt-4">
              While most fungal infections in dogs are restricted to the skin or
              ears and are easily treated, some fungal infections affect the dog
              systemically and can be life-threatening.
            </p>
            <h2 className="font-bold text-lg md:text-xl mt-2 text-yellow-700 leading-relaxed">
              How Do Dogs Get Fungal Infections?
            </h2>
            <p className="leading-relaxed">
              Fungal infections on the skin, like ringworm, usually pass
              directly through skin contact or contaminated surfaces. Most of
              the fungi that infect internal organs are inhaled, but they can
              also be ingested or enter the dog&apos;s system through an open
              wound.
            </p>
            <p className="leading-relaxed">
              Dogs who spend more time outside, like hunting dogs, may be at an
              increased risk of contracting a systemic fungal infection. Most of
              the systemic fungal infections, like histoplasmosis and
              blastomycosis, are not contagious between dogs.
            </p>
            <h2 className="font-bold text-lg md:text-xl mt-2 text-yellow-700 leading-relaxed">
              Dog Fungal Infection Symptoms
            </h2>
            <p className="leading-relaxed">
              The symptoms of a dog fungal infection depend on the type of
              fungus and which part of the dog is affected.
              <br />
              Symptoms of a fungal infection in dogs can include:
            </p>
            <ul className="list-disc list-inside mt-2 ml-4 md:ml-6 leading-relaxed">
              <li>Fur loss</li>
              <li>Scaly lesions on the skin</li>
              <li>Itchiness</li>
              <li>Vomiting</li>
              <li>Dark debris in the ear</li>
              <li>Difficulty breathing or coughing</li>
            </ul>
            <h2 className="font-bold text-lg md:text-xl mt-2 text-yellow-700 leading-relaxed">
              Types of Fungal Infections in Dogs
            </h2>
            <h3 className="font-bold text-lg md:text-xl mt-2 text-yellow-700 leading-relaxed">
              1.Ringworm
            </h3>
            <p className="leading-relaxed">
              You may be surprised to hear that ringworm isn&apos;t actually a
              worm at all , it&apos;s a fungus! Ringworm is a common dog fungal
              skin infection. The fungus passes directly from animal to animal
              via physical contact. Infection from contaminated environments,
              such as an uninfected dog lying in the bed of an infected dog, is
              also possible. Dogs with ringworm develop scaly areas of hair
              loss. The skin may be itchy, though this isn&apos;t always the
              case.
            </p>
            <p className="leading-relaxed">
              Ringworm can pass from a pet to a person, so it&apos;s important
              to regularly wash your hands and decontaminate the environment if
              your pet has ringworm. If you have a lesion that you suspect is
              ringworm, it&apos;s best to consult with a medical professional.
            </p>
            <h3 className="font-bold text-lg md:text-xl mt-2 text-yellow-700 leading-relaxed">
              2.Blastomycosis
            </h3>
            <p className="leading-relaxed">
              Blastomycosis is contracted by inhaling fungal spores from soil.
              Dogs who roam outdoors and live close to water are at an increased
              risk of contracting blastomycosis.
            </p>
            <p className="leading-relaxed">
              Symptoms of blastomycosis in dogs include loss of appetite, weight
              loss, cough, difficulty breathing, exercise intolerance, changes
              to the eyes and vision, and limping. In some cases, dogs can
              develop neurologic signs like seizures, drunken gait, and walking
              in circles. The lymph nodes may be enlarged.
            </p>
            <h3 className="font-bold text-lg md:text-xl mt-2 text-yellow-700 leading-relaxed">
              3.Aspergillosis
            </h3>
            <p className="leading-relaxed">
              Most commonly, aspergillosis is inhaled and causes a nasal
              infection. In some cases, however, the fungus can disseminate
              through the bloodstream to other parts of the body.
            </p>
            <p className="leading-relaxed">
              In dogs who have nasal aspergillosis, signs will include nasal
              discharge, sneezing, and bleeding from the nose. If aspergillosis
              has spread systemically, the dog may be lethargic, experience loss
              of appetite, and potentially spinal pain and weakness in limbs.
            </p>
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg mt-10 mb-10">
              <Image
                src="/assets/summerdog.png"
                alt="dog_summer"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-yellow-700 text-xs font-bold uppercase tracking-widest bg-yellow-100 px-3 py-1 rounded-full">
              Summer
            </span>
            {/* The Content */}
            <h2 id="summer"
            className="text-2xl md:text-3xl font-bold text-amber-900 mt-4 mb-3">
              Common Summer Dangers for Dogs
            </h2>

            <p className="text-stone-600 text-base md:text-lg leading-relaxed">
              Dogs may not count down the days and minutes until summer begins
              like we do. But you can bet they would if they could! Summertime
              is packed with fun adventures dogs love. However, as temperatures
              rise, so do the potential risks dogs face during the summer
              months.
              <br />
              Here&apos;s what you need to know about the most common summer
              dangers for dogs. Plus, you&apos;ll get helpful tips to keep your
              pet safe, happy, and healthy so you can enjoy summer fun together.
            </p>
            <h2 className="font-bold text-lg md:text-xl mt-2 text-yellow-700 leading-relaxed">
              1.Heat Stroke and Heat Exhaustion
            </h2>
            <p className="leading-relaxed">
              Dogs can easily overheat in hot and humid weather because they
              don&apos;t sweat as effectively as people do. They cool off by
              panting, but that doesn&apos;t work as well in hot, humid
              conditions. If they get too hot, they can suffer from heat
              exhaustion from losing fluids and salts after prolonged exposure
              to heat.
            </p>
            <h2 className="font-bold text-lg md:text-xl mt-2 text-yellow-700 leading-relaxed">
              2.Dehydration
            </h2>
            <p className="leading-relaxed">
              Dogs can become dehydrated quickly in hot weather, especially if
              they don&apos;t have access to fresh water. And dehydration can
              lead to serious health problems, including kidney failure and
              death. Dehydration can contribute to the development of heat
              stroke, as well. If you notice signs of dehydration in your dog,
              like dry nose and gums, sunken eyes, and lethargy, contact your
              veterinarian right away to decide the best treatment.
            </p>
            <h2 className="font-bold text-lg md:text-xl mt-2 text-yellow-700 leading-relaxed">
              3.Parasites: Fleas, Ticks, and Heartworms
            </h2>
            <p className="leading-relaxed">
              Pesky parasites thrive during the warm summer weather. If you and
              your dog spend time in nature, you&apos;re more likely to
              encounter disease-carrying fleas, ticks, and mosquitoes that could
              harm your pet. Despite the risks, there&apos;s no need to avoid
              the great outdoors this summer. With a proactive plan to prevent
              parasites, you and your dog can enjoy nature all summer long.
            </p>
            <h2 className="font-bold text-lg md:text-xl mt-2 text-yellow-700 leading-relaxed">
              4.Sunburn and Burned Paws
            </h2>
            <p className="leading-relaxed">
              Dogs can get sunburned, just like us. This is especially true for
              dogs with short or light-colored coats. And the health effects of
              burns from UV rays on dogs are just as dire. Sunburn in dogs can
              lead to skin damage and increase the risk of skin cancer. Summer
              burn hazards don&apos;t just come from above. In warmer weather,
              hot asphalt and sand can burn sensitive dog paws, especially
              during the peak heat hours of the day.
            </p>
            <h2 className="font-bold text-lg md:text-xl mt-2 text-yellow-700 leading-relaxed">
              5.Summer Stress: Fireworks and Anxiety
            </h2>
            <p className="leading-relaxed">
              Summer is a time for celebrations, many of which include fireworks
              that can terrify your dog. But fireworks aren’t the only hazard.
              Parties, parades, and even summer thunderstorms can all cause
              anxiety in dogs.lose consciousness.
            </p>
          </article>
          {/* Article 3 */}
          <article className="max-w-2xl">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg mt-10 mb-10">
              <Image
                src="/assets/dogheart.jpg"
                alt="a cute dog holding a heart"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-yellow-700 text-xs font-bold uppercase tracking-widest bg-yellow-100 px-3 py-1 rounded-full">
              Disease
            </span>
            {/* The Content */}
            <h2
              id="disease"
              className="text-2xl md:text-3xl font-bold text-amber-900 mt-4 mb-3"
            >
              Signs of Heart Disease and Heart Failure in Dogs
            </h2>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed">
              Dogs can develop heart problems that lead to heart failure. While
              dogs don&apos;t tend to have heart attacks like people do, other
              heart conditions which can lead to heart failure are relatively
              common in dogs.
            </p>
            <p className="leading-relaxed mt-4">
              Heart failure in dogs rarely just happens out of nowhere. Your dog
              may have signs of heart disease ahead of actual heart failure.
              Paying attention to those signs and taking good care of your
              dog&apos;s heart health play an important role in managing the
              risk factors.
            </p>
            <h2 className="font-bold text-lg md:text-xl mt-2 text-yellow-700 leading-relaxed">
              General Signs of Heart Problems in Dogs
            </h2>
            <p className="leading-relaxed mt-2">
              It&apos;s critical to keep in mind that "heart failure is the end
              stage of heart disease" in dogs. So learning to spot the signs of
              heart disease in dogs and getting them in for regular veterinary
              exams goes a long way toward slowing the progression from heart
              disease to heart failure.
            </p>
            <p className="leading-relaxed mt-2">
              Here are possible signs of heart problems in dogs to watch for:
            </p>
            <h2 className="font-bold text-lg md:text-xl mt-2 text-yellow-700 leading-relaxed">
              1.Coughing
            </h2>
            <p className="leading-relaxed">
              Another symptom of developing heart trouble that can be easy to
              misinterpret is coughing.But a persistent cough, or especially one
              that follows exercise or a period of excited activity, might be a
              sign of heart disease. Dogs with heart disease sometimes cough
              excessively at night, as well.
            </p>
            <h2 className="font-bold text-lg md:text-xl mt-2 text-yellow-700 leading-relaxed">
              2.Fainting
            </h2>
            <p className="leading-relaxed">
              Fainting can be a symptom of some types of heart disease in dogs.
              This type of fainting happens if the heart skips enough beats that
              not enough blood reaches the brain. The heart starts beating again
              on its own and usually the dog recovers within a few seconds and
              acts like nothing happened. Dogs with fainting should be seen by a
              veterinarian immediately and started on medications to regulate
              their heart beat.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mt-4 mb-3">
              3.Heart Murmur
            </h2>

            <p className="leading-relaxed">
              Not all heart murmurs in dogs are equal. Many puppies have an
              "innocent" heart murmur, which is a very quiet murmur that goes
              away as the puppy matures. These murmurs aren&apos;t related to
              actual heart disease. However, murmurs which are associated with a
              heart disease are called "pathologic" heart murmurs. Veterinarians
              are trained to detect heart murmurs during their routine physical
              exams.
            </p>
            <p className="leading-relaxed">
              The good news about heart disease in dogs is that with regular
              veterinary checkups, usually easy to spot before it progresses to
              heart failure. And while emergencies happen, they almost always
              happen when pet parents are not paying attention to the warning
              signs of heart disease and impending heart failure.<br/>
              The surest signs of heart failure in dogs are labored, rapid breathing and edema in the limbs or belly. Ignoring these warning signs is dangerous. 
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
