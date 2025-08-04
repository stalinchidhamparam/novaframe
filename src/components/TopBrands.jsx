import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { fetchBrands } from '../utils/service';



const ClientModal = ({ client, isOpen, onClose }) => {
  if (!isOpen || !client) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 lg:hidden">
      <div className="bg-zinc-900/95 border border-blue-500/30 rounded-xl p-8 max-w-md w-full relative shadow-2xl transform transition-all duration-300 scale-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-blue-400 hover:text-white transition-colors duration-200 hover:rotate-90 transform"
        >
          <X size={20} />
        </button>

        <div className="text-center">
          <div className="mb-6">
            <img
              src={client.imageUrl}
              alt={client.brandName}
              className="w-20 h-20 rounded-full mx-auto border-2 border-blue-500/50 shadow-lg"
            />
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">
            {client.brandName}
          </h3>

          <p className="text-blue-300 text-sm leading-relaxed italic">
            "{client.review}"
          </p>
        </div>
      </div>
    </div>
  );
};

const Clients = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedClient, setSelectedClient] = useState(null);

  useEffect(() => {
    getClients()
  }, []);

  const getClients = async () => {
    try {
      const clientList = await fetchBrands();
      setClients(clientList);
      setSelectedClient(clientList[0])
      console.log(clientList);

    } catch (error) {
      console.error("Failed to fetch services:", error);
    }
    finally {
      setLoading(false)
    }
  }

  const handleClientClick = (client) => {
    setSelectedClient(client);
    // For mobile, show modal
    if (window.innerWidth < 1024) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-blue-400 rounded-full animate-spin animation-delay-150"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
              Top Brands
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Industry leaders who trust our expertise to deliver exceptional results
            </p>
          </div>

          {/* Desktop Split Layout */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
            {/* Left Side - Client Grid */}
            <div className="lg:sticky lg:top-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
                {clients.map((client, index) => (
                  <div
                    key={client.id}
                    className="group relative flex flex-col items-center cursor-pointer"
                    onClick={() => handleClientClick(client)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Square Container */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-4">
                      {/* Outer Square Border */}
                      <div className={`absolute inset-0  rounded-lg transition-all duration-300 ${selectedClient?.id === client.id
                          ? 'border-blue-500 border-2 bg-blue-500/10'
                          : 'border-gray-800 group-hover:border-blue-500/50'
                        }`}></div>

                      {/* Inner Content */}
                      <div className="absolute inset-1 bg-black rounded-lg overflow-hidden">
                        <img
                          src={client.imageUrl}
                          alt={client.brandName}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-blue-500/30 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </div>

                    {/* Client Name */}
                    <h3 className={`font-semibold text-xs sm:text-sm md:text-base text-center transition-colors duration-300 max-w-full truncate ${selectedClient?.id === client.id
                        ? 'text-blue-300'
                        : 'text-white group-hover:text-blue-300'
                      }`}>
                      {client.brandName}
                    </h3>

                    {/* Animated Underline */}
                    <div className={`h-0.5 bg-blue-500 mt-1 transition-all duration-500 ${selectedClient?.id === client.id
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                      }`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Client Details (Desktop only) */}
            <div className="hidden lg:block">
              <div className="bg-zinc-900/50 border border-blue-500/30 rounded-xl p-2 h-90 flex flex-col justify-center">
                {selectedClient ? (
                  <div className="text-center">
                    <div className="mb-8">
                      <img
                        src={selectedClient.imageUrl}
                        alt={selectedClient.brandName}
                        className="w-32 h-32 rounded-2xl mx-auto shadow-lg"
                      />
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-2">
                      {selectedClient.brandName}
                    </h3>

                    <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>

                    <p className="text-blue-300 text-lg leading-relaxed italic max-w-md mx-auto">
                      "{selectedClient.review}"
                    </p>
                  </div>
                ) : (
                  <div className="text-center text-gray-500">
                    <p>Select a client to view details</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for mobile */}
      <ClientModal
        client={selectedClient}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .group {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          animation-fill-mode: both;
        }

        .animation-delay-150 {
          animation-delay: 150ms;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        /* Smooth modal animations */
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .fixed .bg-zinc-900\\/95 {
          animation: modalFadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Clients;