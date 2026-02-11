import Image from "next/image";

export default function catHealth() {
  return (
    <main className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg mt-10 mb-10">
          <Image
            src="/assets/catHealth.jpg"
            alt="cute pets"
            fill
            className="object-cover"
          />
        </div>
        <p className="mt-5 text-lg">
          Maintaining your cat's health is crucial for their well-being and
          longevity. Regular veterinary care, a balanced diet, and proper
          hygiene are essential components of cat health management.
        </p>
        <div className="mt-12 space-y-16 ml-0 md:ml-5">
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg mt-10 mb-10">
            <Image
              src="/assets/catstress.jpg"
              alt="cat_stress"
              fill
              className="object-cover"
            />
          </div>
          {/* Article 1*/}
          <article className="max-w-2xl">
            <span className="text-yellow-700 text-xs font-bold uppercase tracking-widest bg-yellow-100 px-3 py-1 rounded-full">
              Stress
            </span>
            {/* The Content */}
            <h2
              id="stress"
              className="text-3xl font-bold text-amber-900 mt-4 mb-3"
            >
              Signs your Cat is stressed
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              Stress is defined as the psychological and physical strain
              that&apos;s placed on an animal when they&apos;re exposed to a set
              of negative environmental conditions. In cats, this physical
              response to stress can be particularly harmful and manifest as
              changes in appetite, coat condition, urinary habits, or digestive
              system function. Because of this, it&apos;s important to
              understand when your cat is feeling stressed.
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              1.Aggression
            </h2>
            <ul className="list-disc list-inside mt-2 ml-6 leading-relaxed">
              <li>Frequent moewing more than usual</li>
              <li>Growling</li>
              <li>Scratching</li>
              <li>Biting</li>
            </ul>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              2.Low Energy
            </h2>
            <p className="leading-relaxed">
              Although it&apos;s natural for cats to sleep 16 to 20 hours a day,
              a further reduction in your cat&apos;s activity level may indicate
              she&apos;s feeling stressed.
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              3.Low Appetite and Water Intake
            </h2>
            <p className="leading-relaxed">
              Along with a lower activity level, your cat may not want to eat
              when stressed. This is because cortisol (a stress hormone) is
              released into the body, which suppresses its appetite and may even
              cause nausea. And when it&apos;s sleeping more, it may also have
              less energy to get up to eat and drink.
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              4.Diarrhea and Vomiting
            </h2>
            <p className="leading-relaxed">
              Stress can lead to inflammation in a cat&apos;s digestive system.
              This means your cat is more likely to vomit and have diarrhea when
              experiencing stress.
            </p>
            <p className="leading-relaxed">
              {" "}
              If your cat is showing signs of a low appetite, low water intake,
              diarrhea, or vomiting, schedule a veterinary visit.
            </p>
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg mt-10 mb-10">
              <Image
                src="/assets/catstressOrange.jpg"
                alt="an orange cat under the bed"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-amber-900 mt-4 mb-3">
              What Causes Stress in Cats ?
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              There are many things that can cause stress in cats. Cats like
              routine. They like to know what to expect, and they definitely
              don&apos;t like surprises. Most stress in cats is caused by
              changes in routine, strange cats wandering into their territory, a
              lack of resources, sickness, boredom, pain, and lack of
              socialization.
            </p>
            <p className="leading-relaxed mt-4">
              In specific, sources of stress can include:
            </p>
            <ul className="list-disc list-inside mt-2 ml-6 leading-relaxed">
              <li>
                Moving, renovating, getting new furniture or moving furniture
              </li>
              <li>
                A dirty litterbox, moving the litterbox, changing the litter,
                changing the tray, too many cats in one box
              </li>
              <li>Changing food abruptly</li>
              <li>Boredom</li>
              <li>Veterinary visits, boarding</li>
              <li>
                Human visitors or new people in the house, a new baby, young
                children
              </li>
              <li>Lack of scratching opportunities</li>
              <li>Heavy scents (candles, detergents, etc.)</li>
            </ul>
          </article>

          {/* Article 2*/}
          <article className="max-w-2xl">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg mt-10 mb-10">
              <Image
                src="/assets/catcold.jpg"
                alt="cat_cold"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-yellow-700 text-xs font-bold uppercase tracking-widest bg-yellow-100 px-3 py-1 rounded-full">
              Temperature
            </span>
            {/* The Content */}
            <h2
              id="temperature"
              className="text-3xl font-bold text-amber-900 mt-4 mb-3"
            >
              Do Cats Get Cold ?
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              As you bundle up in heavier clothes and winter coats, you might
              start to wonder if your cat notices the difference in temperature.
              Do cats get cold the same way people do? Whether your cat is more
              of a cozy indoor lounger or a curious outdoor adventurer,
              it&apos;s crucial to understand how the cold affects them and know
              when the temperature might be too low for their comfort and
              safety.
            </p>
            <p className="leading-relaxed mt-4">
              The short answer is yes, but a cat&apos;s susceptibility to chilly
              weather varies depending on several factors.
            </p>
            <p className="leading-relaxed mt-2">
              Cats are likely to feel most comfortable in temperatures ranging
              from 15.5 to 23.8 degrees Celsius which is roughly the average
              indoor temperature for most homes.
            </p>
            <p className="leading-relaxed">
              The exact temperature threshold where it becomes too cold for a
              cat can vary depending on several factors. These include:
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              1.Age
            </h2>
            <p className="leading-relaxed">
              Kittens (particularly those 7 weeks old or younger) are extremely
              vulnerable to cold for several reasons: they have less body fat
              and cannot react to cold by shivering. Senior cats may also
              struggle with temperature regulation.
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              2.Weight
            </h2>
            <p className="leading-relaxed">
              A big, chunky cat with more body fat will stay warmer than a
              slimmer cat with less body fat.
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              3.Health conditions
            </h2>
            <p className="leading-relaxed">
              Cats with chronic medical conditions tend to be more susceptible
              to the cold. Additionally, senior cats or those with weakened
              immune systems might have a harder time maintaining their body
              heat, she adds.
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              4.Weather conditions
            </h2>
            <p className="leading-relaxed">
              Windy, wet, or damp weather can make the cold feel much more
              intense for a cat.
            </p>
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg mt-10 mb-10">
              <Image
                src="/assets/catwarm.jpg"
                alt="cat_warm"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-amber-900 mt-4 mb-3">
              How To Know If Your Cat Is Cold ?
            </h2>

            <p className="text-stone-600 text-lg leading-relaxed">
              Cats have their own ways of showing when they&apos;re too cold. By
              spotting these signs early, you can step in before the cold leads
              to more serious problems.
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              1.Shivering or trembling
            </h2>
            <p className="leading-relaxed">
              Windy, wet, or damp weather can make the cold feel much more
              intense for a cat.
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              2.Cold ears and extremities
            </h2>
            <p className="leading-relaxed">
              While a cat&apos;s ears can naturally be cooler than other parts
              of their body due to less fur and blood flow, persistently cold
              ears, especially in conjunction with other signs, can indicate
              your cat is struggling to stay warm. Cold paw pads and a cold tail
              can also be signs.
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              3.Tucked-in posture
            </h2>
            <p className="leading-relaxed">
              If your cat is curling up tightly with their paws and tail tucked
              underneath their body, they might be trying to conserve heat.
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              4.Seeking warmth
            </h2>
            <p className="leading-relaxed">
              If your cat is seeking out warmer places, like sitting near
              heaters, curling up in blankets, or finding a sunny spot, they
              could be trying to warm up.
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              5.Rapid breathing
            </h2>
            <p className="leading-relaxed">
              Cats may breathe faster when experiencing mild hypothermia as a
              way to generate heat. In severe cases of hypothermia, cats may
              experience slow breathing, collapse, or lose consciousness.
            </p>
          </article>
          {/* Article 3 */}
          <article className="max-w-2xl">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg mt-10 mb-10">
              <Image
                src="/assets/catcommunication.png"
                alt="cat_communication"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-yellow-700 text-xs font-bold uppercase tracking-widest bg-yellow-100 px-3 py-1 rounded-full">
              Communication
            </span>
            {/* The Content */}
            <h2
              id="communication"
              className="text-3xl font-bold text-amber-900 mt-4 mb-3"
            >
              The Hidden Language of Cats: How They Communicate Without Words
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              Cats may be quiet creatures, but they are constantly communicating
              in subtle and fascinating ways. Unlike dogs, cats rely heavily on
              body language, facial expressions, and even tail movements to
              express how they feel. A slowly blinking cat, for example, is
              showing trust and affection—many experts call this a "cat kiss".
            </p>
            <p className="leading-relaxed mt-4">
              Below are some cat vocalizations, along with what they mean.
              Understanding each one will help you identify what kind of mood
              your cat is in and what they could be trying to convey to you.
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              1.Meowing
            </h2>
            <p className="leading-relaxed mt-2">
              Cats can meow when they are both happy or trying to get your
              attention, so it&apos;s important to take note of other body
              language cues to see what kind of mood your cat is in.
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              2.Purring
            </h2>
            <p className="leading-relaxed">
              Another intriguing behavior is purring. While purring often
              signals contentment, cats also purr when they are stressed,
              injured, or seeking comfort. Scientists believe this vibration may
              help cats heal themselves by reducing pain and promoting bone and
              tissue recovery.
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              3.Yowling
            </h2>
            <p className="leading-relaxed">
              Yowling is a painful loud sound, obnoxiously nasally meow that
              goes on for days. It can also be used to express illness,
              attention seeking, loneliness, or stress.
            </p>
            <h2 className="text-3xl font-bold text-amber-900 mt-4 mb-3">
              Body Language
            </h2>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              1.Tail
            </h2>
            <div className="relative w-full h-[600px] sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg mt-10 mb-5">
              <Image
                src="/assets/cattail.png"
                alt="cat_tail_movement_meaning"
                fill
                className="object-fill"
              />
            </div>
            <p className="leading-relaxed">
              A cat&apos;s tail is a powerful communication tool that reveals
              how they&apos;re feeling. Slow, gentle movements often signal
              curiosity or relaxation, while quick flicks or sharp swishes can
              indicate irritation or overstimulation. A raised tail usually
              means confidence and friendliness, whereas a puffed-up tail is a
              clear sign of fear or aggression. Paying attention to tail
              movements helps you understand your cat&apos;s mood and respond to
              them with care.
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              2.Eyes
            </h2>
            <p className="leading-relaxed">
              A cat&apos;s eyes can tell all, just like nearly any living
              creature. So, our eyes can give us a very good indication of mood
              based on the pupils and positioning like:
            </p>
            <ul className="list-disc list-inside mt-2 ml-6 leading-relaxed">
              <li>
                <span className="font-bold">Dilated Pupils : </span>
                Can signal one of two things. Either it means that they are
                excited about something, or they are fixated on prey.
              </li>
              <li>
                <span className="font-bold">Squinted Glare : </span>
                This usually happens when your cat is relaxed and isn&apos;t
                generally amused about what&apos;s happening.{" "}
              </li>
              <li>
                <span className="font-bold">Slow Blinking : </span>
                Is often a sign of affection, and it&apos;s generally seen when
                you are paying attention to your cat. Also, known as a "cat
                kiss".
              </li>
            </ul>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              3.Head
            </h2>
            <p className="leading-relaxed">
              Let&apos;s not forget the feline head one of the parts that has
              the most personality! What do expressions or movements of the head
              mean? Let&apos;s find out!
            </p>
            <ul className="list-disc list-inside mt-2 ml-6 leading-relaxed">
              <li>
                <span className="font-bold"> Bunting: </span>
                Bunting is often done during affection sessions. However, this
                is a territorial behavior, so essentially your cats are claiming
                you as theirs! They are bunting you to rub the pheromones
                produced in their glands on you, letting other cats know whose
                property you are.
              </li>
              <li>
                <span className="font-bold"> Rubbing: </span>
                Cats like to rub up against you because it simply feels good and
                because it&apos;s a way of transferring their scent.
              </li>
              <li>
                <span className="font-bold"> Wet Nose Kiss: </span>
                If your cat gives you a kiss with their wet nose, it&apos;s
                simply a way to signal affection. What an adorable way to say "I
                love you!".
              </li>
            </ul>
          </article>
          {/* Article 4*/}
          <article className="max-w-2xl">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg mt-10 mb-10">
              <Image
                src="/assets/catfur.jpg"
                alt="cat_furry"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-yellow-700 text-xs font-bold uppercase tracking-widest bg-yellow-100 px-3 py-1 rounded-full">
              Hair Loss
            </span>
            {/* The Content */}
            <h2
              id="hairLoss"
              className="text-3xl font-bold text-amber-900 mt-4 mb-3"
            >
              Why Is My Cat Losing Hair? Causes and How to Help
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              It&apos;s natural for cats to shed fur. We all want a cat who
              doesn&apos;t leave fur around the house, but their fur grows and
              then it sheds. Some cats, however, will lose so much fur that it
              starts to look thin and you can see their skin more clearly.
              Normal shedding of fur would not allow you to see the skin so
              easily. If you&apos;re wondering “why is my cat losing hair,”
              we&apos;re here to explain the most common causes. Some may even
              surprise you!
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              Is Your Cat Losing Fur? All About Alopecia in Cats
            </h2>
            <p className="leading-relaxed">
              Alopecia is when fur is lost that is not part of the normal growth
              cycle. When alopecia occurs, a bald spot or thin, patchy fur is
              noted anywhere on the cat&apos;s body. Alopecia may expose skin
              underneath that looks pretty normal, or it can look very abnormal.
              Pet parents may notice that cat fur loss increases in certain
              times of year, making it seem seasonal. There is almost always a
              medical issue to explain this ,it is rarely caused by cat
              behavioral problems.
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              Types of Alopecia in Cats
            </h2>
            <p className="leading-relaxed">
              There are a few descriptions of what kind of alopecia your cat is
              experiencing, which include:
            </p>
            <ul className="list-disc list-inside mt-2 ml-6 leading-relaxed">
              <li>
                <span className="font-bold">Patchy alopecia :</span>when fur is
                thin in some places but normal length in other places in the
                same area of the body
              </li>
              <li>
                <span className="font-bold">Generalized alopecia : </span>when
                fur is when losing fur in large portions of the whole body
              </li>
              <li>
                <span className="font-bold">Symmetrical alopecia : </span>
                when losing fur on both sides of the body in a similar pattern
              </li>
              <li>
                <span className="font-bold">Seasonal alopecia: </span>
                when losing fur during specific seasons of the year (i.e., every
                spring, summer, and/or fall)
              </li>
            </ul>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              3.Health conditions
            </h2>
            <p className="leading-relaxed">
              Cats with chronic medical conditions tend to be more susceptible
              to the cold. Additionally, senior cats or those with weakened
              immune systems might have a harder time maintaining their body
              heat, she adds.
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              Symptoms of Alopecia in Cats
            </h2>
            <p className="leading-relaxed">
              Sometimes, cats lose fur with no other apparent symptoms. However,
              other symptoms are common and may include:
            </p>
            <ul className="list-disc list-inside mt-2 ml-6 leading-relaxed">
              <li>Redness of the skin</li>
              <li>Scaly skin</li>
              <li>Greasy skin or fur</li>
              <li>Scratches or mild bleeding of the skin</li>
              <li>Frequent grooming and pulling/biting at the fur</li>
            </ul>
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg mt-10 mb-10">
              <Image
                src="/assets/hairloss.jpg"
                alt="hair_loss"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-amber-900 mt-4 mb-3">
              Why Is My Cat Losing Hair?
            </h2>

            <p className="text-stone-600 text-lg leading-relaxed">
              The most common reason by far for your cat to lose their fur is
              allergies! There are three types of allergies listed below. Other
              than that, a variety of parasites or illnesses may be the cause:
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              1.Flea allergy
            </h2>
            <p className="leading-relaxed">
              Even one bite from a flea can cause a big reaction, leading to
              itchiness.
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              2.Food allergy
            </h2>
            <p className="leading-relaxed">
              Allergies to food cause a reaction in the skin, which leads to
              itchiness and inflammation.
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              3.Environmental allergies
            </h2>
            <p className="leading-relaxed">
              Allergies can be to many different things — pollen, dust, mold —
              that lead to a skin reaction.
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              4.Ringworm
            </h2>
            <p className="leading-relaxed">
              Ringworm is a fungal infection of the skin, causing inflammation
              of the follicles that hold fur. When the skin is inflamed, the fur
              falls out. Sometimes, cats are itchy with this infection.
            </p>
            <h2 className="font-bold text-xl mt-2 text-yellow-700 leading-relaxed">
              5.Cancer
            </h2>
            <p className="leading-relaxed">
              This is a rare cause of alopecia. Cancer found inside of your cat
              can cause alopecia.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
