const About = () => {
  return (
    <section>
      <div class="items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <ul
          role="list"
          class="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-12"
        >
          <li>
            <div class="flex flex-col items-center gap-4 text-center">
              <img
                class="object-cover w-16 h-16 rounded-full lg:h-20 lg:w-20"
                src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:6cc21b5b-ad2a-46c8-b79a-56f17fcb128b/b760750e-50f6-4ec3-a9d0-6d0f5d2b573c/48"
                alt=""
              />
              <div class="space-y-1">
                <h3 class="text-lg font-medium leading-6 text-black">
                  Juliana Nobile
                </h3>
                <p class="text-base text-gray-500">Scrum master</p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex flex-col items-center gap-4 text-center">
              <img
                class="object-cover w-16 h-16 rounded-full lg:h-20 lg:w-20"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
              <div class="space-y-1">
                <h3 class="text-lg font-medium leading-6 text-black">
                  Juan Díaz
                </h3>
                <p class="text-base text-gray-500">Tech Lead Back</p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex flex-col items-center gap-4 text-center">
              <img
                class="object-cover w-16 h-16 rounded-full lg:h-20 lg:w-20"
                src="https://avatars.githubusercontent.com/u/17477347?v=4"
                alt=""
              />
              <div class="space-y-1">
                <h3 class="text-lg font-medium leading-6 text-black">
                  Daniel Salazar
                </h3>
                <p class="text-base text-gray-500">Tech Lead Front</p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex flex-col items-center gap-4 text-center">
              <img
                class="object-cover w-16 h-16 rounded-full lg:h-20 lg:w-20"
                src="https://avatars.githubusercontent.com/u/87541505?v=4"
                alt=""
              />
              <div class="space-y-1">
                <h3 class="text-lg font-medium leading-6 text-black">
                  José Alvarez
                </h3>
                <p class="text-base text-gray-500">Backend developer</p>
              </div>
            </div>
          </li>
          <li>
            <div class="flex flex-col items-center gap-4 text-center">
              <img
                class="object-cover w-16 h-16 rounded-full lg:h-20 lg:w-20"
                src="https://avatars.githubusercontent.com/u/33037061?v=4"
                alt=""
              />
              <div class="space-y-1">
                <h3 class="text-lg font-medium leading-6 text-black">
                  Olmeiro Orozco
                </h3>
                <p class="text-base text-gray-500">Frontend developer</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default About;
